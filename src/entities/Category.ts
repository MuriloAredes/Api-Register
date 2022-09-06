import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import Product from "./Product";

@Entity({name: "Categories"})

export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({name: "name"})
  name: string;

  @Column({name:"isActive",default: true })
  isActive: boolean;

  @Column({name:"create_At"})
  @CreateDateColumn({name:"create_At" ,default: null })
  create_At: Date;

  @Column({name:"update_At"})
  @UpdateDateColumn({default: null })
  update_At: Date;

  @OneToMany(() => Product, (product) => product.category)
    product: Product[]
}

export default Category;
