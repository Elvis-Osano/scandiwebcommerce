import { checkType } from "@Helpers";
import { DataType } from "@Interfaces";
import { ProductDto } from "DTO";
import React from "react";
import {} from "react-icons/fa";
const ProductCard: React.FC<{
  children?: React.ReactNode;
  product: DataType;
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<ProductDto[]>>;
}> = ({ product, setData, data }) => {
  return (
    <div className=" h-56 bg-slate-100 relative overflow-hidden   flex flex-col justify-center items-center gap-3">
      <input
        type="checkbox"
        className=" w-4 h-4   delete-checkbox absolute top-2  border  left-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        onChange={(e) => {
          let checked = e.target.checked;
          setData(
            data.map((p) => {
              if (product.id === p.id) {
                p.select = checked;
              }
              return p;
            })
          );
        }}
        checked={product.select}
      ></input>
      <span>{product.sku}</span>
      <span>{product.name}</span>
      <span>${product.price}</span>
      <span>{checkType(product.type, product.value)}</span>
    </div>
  );
};

export default ProductCard;
