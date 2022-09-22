import { ProductDto } from "DTO";
import { NextRouter } from "next/router";

export class BackendCall {
  //fetch data
  async fetchData(): Promise<ProductDto[]> {
    try {
      const data = await (await fetch(`${process.env.NEXT_PUBLIC_API}`)).json();

      return data;
    } catch (error) {
      return [];
    }
  }
  //add Products
  async addNewProduct(payload: ProductDto, router: NextRouter): Promise<void> {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.status === 201 ? router.push("/") : null;
      });
    } catch (error) {}
  }
  //Mass Delete
  async massDelete(ids: number[], forceUpdate: any): Promise<void> {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API}/delete`, {
        method: "DELETE",
        body: JSON.stringify({ ids }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.status === 200 ? forceUpdate() : null;
      });
    } catch (error) {}
  }
}
