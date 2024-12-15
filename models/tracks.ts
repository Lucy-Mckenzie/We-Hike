export interface AllTracks {
  assetId: string;
  name:    string;
  region:  string;
  x:       number;
  y:       number;
  line:    Array<Array<number[]>>;
}

export interface GreatWalk {
  name: string;
  location: number[]; 
  region: string;
  distance: number;
  descriptionS: string;
  descriptionL: string;
  dogaccess: string;
}