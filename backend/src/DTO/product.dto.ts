import { Producttypes } from "@Entities";
import { IsNotEmpty, Min, IsIn, IsObject } from "class-validator";

export default class ProductDto {
  @IsNotEmpty()
  sku: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @Min(0)
  price: number;
  @IsNotEmpty()
  @IsIn([Producttypes.books, Producttypes.dvd, Producttypes.furniture])
  type: Producttypes;
  @IsNotEmpty()
  @IsObject()
  value: object;
}
