import { User } from '../user.model';

export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  updated_at: Date;
  user:any;
}
