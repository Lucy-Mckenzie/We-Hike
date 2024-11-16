export interface Review {
  id?: string,
  userId?: string;
  assetId?: string; 
  hikeName: string;
  rating?: number;
  comment: string;
  author: string;
  added_by_user?: string
}