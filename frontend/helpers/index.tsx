import { Books, Dvd, Furniture, None } from "@ProductTypes";

import React from "react";
import { Book, DvdInt, Furn, InputForm, Prop } from "../interfaces";

//form data inputs
export const formInputs: InputForm[] = [
  {
    name: "sku",
    id: "sku",
    placeholder: "sku",
    type: "text",
  },
  {
    name: "name",
    id: "name",
    placeholder: "Please enter product name",
    type: "text",
  },
];

//Furniture Description input
export const furnitureInputs: InputForm[] = [
  {
    name: "Height(CM)",
    id: "height",
    placeholder: "height",
    type: "number",
  },
  {
    name: "Width(CM)",
    id: "width",
    placeholder: "width",
    type: "number",
  },
  {
    name: "Length(CM)",
    id: "length",
    placeholder: "length",
    type: "number",
  },
];

//Dynamic Form Type
export const productTypeForm: Record<string, React.FC<Prop>> = {
  none: None,
  dvd: Dvd,
  books: Books,
  furniture: Furniture,
};
//product Types
export enum Producttypes {
  furniture = "furniture",
  books = "books",
  dvd = "dvd",
  none = "none",
}
//card render
export const checkType = (
  type: Producttypes,
  typeObj: Furn | Book | DvdInt
) => {
  switch (type) {
    case Producttypes.furniture:
      return (
        <span>
          Dimensions:
          <br />
          {Object.values((typeObj as Furn).dimensions).join(" X ")}
        </span>
      );
    case Producttypes.books:
      return <span>Weight:{(typeObj as Book).weight} KG </span>;
    case Producttypes.dvd:
      return <span>Size:{(typeObj as DvdInt).size} MB</span>;

    default:
      break;
  }
};
//form inputs focus

export const handleEnter = (event) => {
  if (event.key.toLowerCase() === "enter") {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
};
