export interface Huts {
  assetId: number;
  name:    string;
  status:  string;
  region:  string;
  y:       number;
  x:       number;
}

export interface HutAlerts {
  assetId: number;
  name:    string;
  alerts: Alert[]; 
}

export interface Alerts {
  text: string;
  id: string;
  summary: string;
  description: string;
  descriptionHtml: string;
  startDate: string;
  endDate?: string; 
  lastUpdated: string;
  regions: Region[];
}

export interface Region {
  id: string;
  name: string;
}
export interface Alert {
  displayDate: string;
  heading: string;
  detail: string;
}
export interface HutsDetail {
  assetId:               number;
  name:                  string;
  locationString:        string;
  numberOfBunks:         number;
  facilities:            string[];
  hutCategory:           string;
  proximityToRoadEnd:    null;
  bookable:              boolean;
  introduction:          string;
  introductionThumbnail: string;
  staticLink:            string;
  region:                string;
  place:                 string;
  status:                string;
  x:                     number;
  y:                     number;
}
