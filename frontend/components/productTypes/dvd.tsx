import { addContext } from "context/context";

import React from "react";

const Dvd: React.FC = () => {
  const setpayload = React.useContext(addContext);
  return (
    <div id="DVD" className="p-3">
      <label className="block mb-2 text-xl font-medium capitalize  text-gray-900 ">
        DVD size In MB
      </label>
      <input
        type="number"
        id="size"
        name="dvd"
        placeholder="dvd Size"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setpayload((prev) => ({
            ...prev,
            type: e.target.name,
            value: {
              [e.target.id]: parseInt(e.target.value),
            },
          }))
        }
        required
      />
      <span>Please, provide weight in MB(s) </span>
    </div>
  );
};

export default Dvd;
