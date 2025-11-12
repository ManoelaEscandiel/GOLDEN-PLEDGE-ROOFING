
export interface Campaign {
  id: number;
  title: string;
  details: {
    label: string;
    value: string;
  }[];
}

export interface KeywordRow {
  group: string;
  keywords: string[];
  persona: string;
  cpc: string;
  justification: string;
}

export interface AdCreative {
  title: string;
  focus: string;
  headlines: string[];
  descriptions: string[];
}
