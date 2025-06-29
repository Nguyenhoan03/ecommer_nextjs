export interface BaseCardItem {
  img: string;
  name: string;
  price?: string | number;
  oldPrice?: string;
  code?: string;
  badge?: string;
  desc?: string;
  link?: string;
}