export interface AllTracks {
  assetId: string;
  name:    string;
  region:  string[];
  x:       number;
  y:       number;
  line:    Array<Array<number[]>>;
}