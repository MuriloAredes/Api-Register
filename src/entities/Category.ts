import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import Product from "./Product";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @OneToMany((type) => Product, (product) => product.category)
  product: Product[];

  @Column()
  @CreateDateColumn()
  create_At: Date;

  @Column()
  @UpdateDateColumn()
  update_At: Date;
}

export default Category;
