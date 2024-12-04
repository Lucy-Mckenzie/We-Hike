export interface Huts {
  assetId: number;
  name:    string;
  status:  string;
  region:  string;
  y:       number;
  x:       number;
}

export interface Alerts {
  displayDate: string;
  heading:     string;
  detail:      string;
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