import { Tag } from './';

export interface Product {
  id: string;
  title: string;
  price: number;
  image?: string;
  tags: Tag[];
  description: string;
}
