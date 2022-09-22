import { DataType, ProductProp } from "@Interfaces";

import { BackendCall } from "helpers/backend.service";
import React, { useEffect, useState } from "react";

import ProductCard from "./productCard";

const Products: React.FC<ProductProp> = ({ setids, ignored }) => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    (async () => {
      const products = await new BackendCall().fetchData();
      setData(products.map((p) => ({ ...p, select: false })));
    })();
  }, [ignored]);
  useEffect(() => {
    const ids = data.reduce((ids, p) => {
      if (p.select) {
        ids = [...ids, p.id];
      }
      return ids;
    }, []);

    setids(ids);
  }, [data]);

  return (
    <div className="grid  transition-[height] ease-in-out delay-150 duration-300 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4  2xl:grid-cols-5 py-8  w-5/6 mx-auto gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} {...{ product, data, setData }} />
      ))}
    </div>
  );
};

export default Products;
