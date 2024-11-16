export interface Review {
  id?: number,
  userId?: string;
  assetId?: string; 
  hikeName: string;
  rating?: number;
  comment: string;
  author: string;
  added_by_user?: string
}