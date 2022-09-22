import { ProductDto } from "DTO";
import React from "react";
export const productContext = React.createContext<any>({
  sku: "",
  name: "",
  price: 0,
  type: "none",
  value: {},
});
export const addContext = React.createContext<any>(() => {});
export const AddProductContext: React.FC = ({ children }) => {
  const [payload, setPayload] = React.useState<any>({
    sku: "",
    name: "",
    price: 0,
    type: "none",
    value: {},
  });

  return (
    <productContext.Provider value={payload}>
      <addContext.Provider value={setPayload}>{children}</addContext.Provider>
    </productContext.Provider>
  );
};
