import Decimal from "decimal.js";
import { DecimalTransformer } from "src/database";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum Producttypes {
  furniture = "furniture",
  books = "books",
  dvd = "dvd",
}
@Entity()
export default class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: true,
    length: 50,
  })
  sku: string;
  @Column({
    length: 50,
    default: "Amanerd",
  })
  name: string;
  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
  })
  price: Decimal;
  @Column({
    type: "enum",
    enum: Producttypes,
  })
  type: string;
  @Column({
    type: "simple-json",
  })
  value: {};
  @CreateDateColumn()
  createdDate: Date;
}
