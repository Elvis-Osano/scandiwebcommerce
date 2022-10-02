import { Products } from "@Framework";
import { BackendCall } from "helpers/backend.service";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@mui/material";
import React from "react";
import { useReducer } from "react";

const IndexPage = () => {
  const [ids, setIds] = React.useState<number[]>([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <React.Fragment>
      <Head>
        <title>Products|Home</title>
        <meta
          name="description"
          content="The ultimate Scandiweb Junior Developer Test Assignment.Testing your skills by creating a simple POS system "
        />
      </Head>
      <nav className=" w-full z-10   fixed bg-white border-b-2 border-slate-100 py-5 ">
        <div className="flex w-11/12 mx-auto gap-4 items-center justify-between ">
          <h1 className="inline  sm:text md:text-xl lg:text-2xl font-sans font-bold">
            Product List
          </h1>
          <div className="flex gap-3 items-center ">
            <Link href={"/add-product"}>
              <Button
                variant="contained"
                className="bg-blue-600 font-sans h-9 w-10  "
                title="add new Product "
              >
                ADD
              </Button>
            </Link>

            <Button
              variant="contained"
              id="delete-product-btn"
              className="md:h-9 md:w-15 "
              onClick={() => new BackendCall().massDelete(ids, forceUpdate)}
              sx={{
                "&.MuiButton-contained": {
                  backgroundColor: "red",
                  color: "white",
                },
                "&:active": {
                  backgroundColor: "black",
                },
                "&:hover": {
                  backgroundColor: "rgba(100,0,0,.7)",
                },
                "&:disabled": {
                  color: "black",
                  backgroundColor: "rgba(0,0,0,.2)",
                },
              }}
              disabled={ids.length ? false : true}
            >
              MASS DELETE
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-14">
        <Products ignored={ignored} setids={setIds} />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
