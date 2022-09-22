import { ProductDto } from "DTO";
import React, { SetStateAction } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  size?: number;
  dimension?: number[];
  weight?: number;
};
export type InputForm = {
  name: string;
  placeholder: string;
  type: string | number;
  id: string;
};
export type Prop = {
  children?: React.ReactNode;
  setpayload: React.Dispatch<SetStateAction<any>>;
};
export interface DataType extends ProductDto {
  select: boolean;
}
export interface Furn {
  dimensions: {
    height: number;
    width: number;
    length: number;
  };
}
export interface Book {
  weight: number;
}
export interface DvdInt {
  size: number;
}
export interface ProductProp {
  children?: React.ReactNode;
  setids: React.Dispatch<React.SetStateAction<number[]>>;
  ignored: any;
}
