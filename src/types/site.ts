export interface LolSite {
  domain: string;
  title: string;
  description: string;
  category: string;
  monthlyVisits?: number;
  globalRank?: number;
  technologies: string[];
  screenshot?: string;
  favicon?: string;
  country?: string;
  foundedYear?: number;
  tags?: string[];
  source?: string;
  lastChecked?: string;
}
