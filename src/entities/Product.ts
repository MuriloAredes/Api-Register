import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  
} from "typeorm";
import Category from "./Category";

@Entity("Products")
class product {
  @PrimaryGeneratedColumn("uuid")
  Id: string;

  @Column()
  Name: string;

  @Column()
  Price: number;

  @Column()
  Amount: number;
  
  @Column()
  
  CategoryId: string;

  @Column()
  IsActive: boolean;

  @ManyToOne((type) => Category, (category) => category.product, {
    cascade: true,
  })
 @JoinTable()
  category: Category;
}

export default product;
