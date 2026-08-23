import type { LolSite } from '../types/site';
import rawSites from './sites.json';

export const sites: LolSite[] = rawSites as LolSite[];
export default sites;
