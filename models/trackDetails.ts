export interface TrackDetails {
  assetId:               string;
  name:                  string;
  introduction:          string;
  introductionThumbnail: string;
  permittedActivities:   string[];
  distance:              string;
  walkDuration:          string;
  walkDurationCategory:  string[];
  walkTrackCategory:     string[];
  wheelchairsAndBuggies: null;
  mtbDuration:           null;
  kayakingDuration:      null;
  dogsAllowed:           string;
  locationString:        string;
  locationArray:         string[];
  region:                string[];
  staticLink:            string;
  x:                     number;
  y:                     number;
  line:                  Array<Array<number[]>>;
}

export interface TracksByRegion {
  assetId: string;
  name:    string;
  region:  string[];
  x:       number;
  y:       number;
  line:    Array<Array<number[]>>;
}