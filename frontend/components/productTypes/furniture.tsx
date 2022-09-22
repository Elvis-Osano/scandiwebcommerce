import { furnitureInputs, handleEnter } from "@Helpers";
import { addContext } from "context/context";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Furniture: React.FC = () => {
  const setpayload = React.useContext(addContext);
  const [furn, setFurn] = useState({
    height: 0,
    length: 0,
    width: 0,
  });
  useEffect(
    () =>
      setpayload((prev) => ({
        ...prev,
        type: "furniture",
        value: {
          dimensions: furn,
        },
      })),
    [furn]
  );

  return (
    <form className="p-3">
      {furnitureInputs.map((item, i) => (
        <div key={i}>
          <label className="block mb-2 text-xl font-medium capitalize  text-gray-900 ">
            {item.name}
          </label>
          <input
            type={`${item.type}`}
            id={item.id}
            name={item.name}
            placeholder={`${item.placeholder}`}
            min={0}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFurn((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            }}
            required
          />
        </div>
      ))}
      <span>Please provide dimensions in HxWxL format</span>
    </form>
  );
};

export default Furniture;
