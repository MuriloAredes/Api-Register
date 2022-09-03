import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from "typeorm";
import Category from "./Category";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  category_Id: string;

  @Column()
  IsActive: boolean;

  @ManyToOne((type) => Category, (category) => category.product, {
    cascade: true,
  })
  @JoinTable({ name: "category_Id" })
  category: Category;
}

export default Product;
