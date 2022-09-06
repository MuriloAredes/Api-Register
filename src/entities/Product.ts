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

  @Column({name:"isActive", default: true})
  isActive: boolean;

  @ManyToOne(() => Category ,(category) => category.product)
  @JoinTable({ name: "category_Id" })
  category: Category;
}

export default Product;
 