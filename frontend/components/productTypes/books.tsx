import { addContext } from "context/context";

import React from "react";

const Books: React.FC = () => {
  const setpayload = React.useContext(addContext);
  return (
    <div id="Book" className="p-3">
      <label className="block mb-2 text-xl font-medium capitalize  text-gray-900 ">
        Weight of Books(KG)
      </label>
      <input
        type="number"
        id="weight"
        name="books"
        placeholder="book weight"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setpayload((prev) => ({
            ...prev,
            type: e.target.name,
            value: {
              [e.target.id]: parseInt(e.target.value),
            },
          }))
        }
        min={0}
        required
      />
      <span>Please, provide weight in KG(s) </span>
    </div>
  );
};

export default Books;
