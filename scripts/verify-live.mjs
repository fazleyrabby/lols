import fs from 'fs';
import path from 'path';
import dns from 'dns/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITES_JSON_FILE = path.join(__dirname, '../src/data/sites.json');

async function testSite(site) {
  try {
    const ip = await dns.lookup(site.domain);
    if (!ip || !ip.address) {
      console.log(`❌ [DNS FAIL] ${site.domain}`);
      return null;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://${site.domain}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (res.status >= 400 && res.status !== 403 && res.status !== 429) {
      console.log(`❌ [HTTP ${res.status}] ${site.domain}`);
      return null;
    }

    console.log(`✅ [100% REACHABLE] ${site.domain} (${ip.address}) - HTTP ${res.status}`);
    return site;
  } catch (err) {
    console.log(`❌ [UNREACHABLE] ${site.domain} - ${err.code || err.message}`);
    return null;
  }
}

async function verifyAll() {
  console.log('🔍 Auditing sites.json with strict DNS and HTTP validation...\n');
  
  if (!fs.existsSync(SITES_JSON_FILE)) {
    console.error('sites.json does not exist!');
    return;
  }

  const allSites = JSON.parse(fs.readFileSync(SITES_JSON_FILE, 'utf-8'));
  console.log(`Checking ${allSites.length} sites...`);

  const verified = [];
  for (const site of allSites) {
    const res = await testSite(site);
    if (res) verified.push(res);
  }

  verified.sort((a, b) => (b.monthlyVisits || 0) - (a.monthlyVisits || 0));

  fs.writeFileSync(SITES_JSON_FILE, JSON.stringify(verified, null, 2), 'utf-8');
  console.log(`\n🎉 Verification complete: Saved ${verified.length}/${allSites.length} verified live sites to ${SITES_JSON_FILE}.`);
}

verifyAll().catch(console.error);
