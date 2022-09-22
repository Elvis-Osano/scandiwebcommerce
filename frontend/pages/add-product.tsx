import { ProductForm } from "@Framework";
import { Button } from "@mui/material";
import { productContext } from "context/context";
import { BackendCall } from "helpers/backend.service";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AddProducts = () => {
  const payload = React.useContext(productContext);
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title> Add New Product</title>
        <meta
          name="description"
          content="The ultimate Scandiweb Junior Developer Test Assignment.Skill test:adding a new product to database! "
        />
      </Head>

      <nav className=" py-5  fixed w-full bg-white  border-b-2 border-slate-100">
        <div className="flex justify-between w-11/12 mx-auto">
          <h1 className="inline text-2xl font-sans font-bold">Product Add</h1>
          <div className="flex gap-3   ">
            <Button
              variant="contained"
              onClick={() => new BackendCall().addNewProduct(payload, router)}
              sx={{
                "&.MuiButton-contained": {
                  color: "white",
                  backgroundColor: "black",
                },
                "&:active": {
                  backgroundColor: "white",
                },
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Save
            </Button>

            <Link href={"/"}>
              <Button
                variant="contained"
                sx={{
                  "&.MuiButton-contained": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  "&:active": {
                    backgroundColor: "white",
                  },
                  "&:hover": {
                    color: "black",
                    backgroundColor: "rgba(0,0,0,.2)",
                  },
                }}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <main className="w-11/12 mx-auto pt-20">
        <ProductForm />
      </main>
    </React.Fragment>
  );
};

export default AddProducts;
