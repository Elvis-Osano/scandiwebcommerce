import { Book, DvdInt, Furn } from "@Interfaces";
import { Producttypes } from "helpers";

export default class ProductDto {
  id?: string;
  sku: string;
  name: string;

  price: number;

  type: Producttypes;

  value: Furn | Book | DvdInt;
  createdDate?: Date;
}
