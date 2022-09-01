import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, Timestamp } from "typeorm";
import Product from "./Product";

@Entity("Categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  Id: string;

  @Column()
  Name: string;

  @Column()
  Register: Timestamp;

  @Column()
  IsActive: boolean;

  @OneToMany((type) => Product, (product) => product.category)
  product: Product[];

}

export default Category;
