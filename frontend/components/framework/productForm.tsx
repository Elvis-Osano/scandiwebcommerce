import { formInputs, handleEnter, productTypeForm } from "@Helpers";
import { addContext } from "context/context";
import React from "react";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
const ProductForm = () => {
  const [type, setType] = useState({ selected: "none" });
  const setPayload = React.useContext(addContext);

  const Card = productTypeForm[type.selected];
  const inputReference = React.useRef(null);

  React.useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <form
      action=""
      method="post"
      className="lg:w-2/5 sm:w-full py-3 flex flex-col gap-4"
    >
      {formInputs.map((item, i) => (
        <div key={i} className="grid lg:grid-cols-3 md:grid-cols-4 sm:w-full">
          <label className=" mb-2 text-xl font-medium capitalize  text-gray-900 ">
            {item.name}:
          </label>
          <input
            type={`${item.type}`}
            id={`${item.id}`}
            name={item.name}
            placeholder={`${item.placeholder}`}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPayload((prev) => ({
                ...prev,
                [e.target.id]: e.target.value,
              }))
            }
            ref={item.name === "sku" ? inputReference : null}
            onKeyDown={handleEnter}
            
          />
        </div>
      ))}
      <div className="grid lg:grid-cols-3 md:grid-cols-4 sm:w-full">
        <label className=" mb-2 text-xl font-medium capitalize  text-gray-900 ">
          Price($):
        </label>
        <CurrencyInput
          id="price"
          name="price($)"
          placeholder="Please enter a product price"
          decimalsLimit={2}
          onValueChange={(value) =>
            setPayload((prev) => ({ ...prev, price: parseFloat(value) }))
          }
          prefix="$"
        />
      </div>

      <label
        htmlFor="Types"
        className="block mb-2 text-xl font-medium text-gray-900"
      >
        Select Product Type
      </label>
      <select
        id="productType"
        className="bg-gray-50 sm:w-96 border border-gray-300 text-gray-900 cursor-pointer text-sm rounded-lg focus:outline-1 focus:outline-blue-300  block w-full p-2.5 "
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setPayload((prev) => ({ ...prev, type: { [e.target.value]: [] } }));
          setType({ selected: e.target.value });
        }}
        defaultValue={"DEFAULT"}
      >
        <option value={"DEFAULT"} disabled>
          Types
        </option>
        <option value="dvd">DVD</option>
        <option value="furniture">Furniture</option>
        <option value="books">Books</option>
      </select>
      <div className="bg-slate-100  transition-height ease-in-out delay-150 duration-300">
        <Card setpayload={setPayload} />
      </div>
    </form>
  );
};

export default ProductForm;
