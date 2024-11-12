export interface Review {
  id: number; 
  assetId: string; 
  hikeName: string;
  rating: number;
  comment?: string;
  author?: string;
}