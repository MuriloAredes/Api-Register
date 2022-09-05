import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from "typeorm";
import Category from "./Category";

@Entity({name:"Products"})
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({name:"name"})
  name: string;

  @Column({name:"price"})
  price: number;

  @Column({name:"amount"})
  amount: number;

  @Column({name:"category_Id"})
  category_Id: string;

  @Column({name:"IsActive", default: true})
  isActive: boolean;

  @ManyToOne(() => Category)
  @JoinTable({ name: "category_Id" })
  Category: Category;
}

export default Product;
 