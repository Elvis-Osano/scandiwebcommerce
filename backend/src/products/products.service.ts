import { DeleteDto, ProductDto } from "@Dto";
import { Products } from "@Entities";
import { ConflictException, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
  private log = new Logger("productsController");
  constructor(
    @InjectRepository(Products) private productRepo: Repository<Products>
  ) {}

  async getProducts() {
    return this.productRepo.find();
  }
  async addProduct(product: ProductDto) {
    try {
      //create instance of new product
      const data = this.productRepo.create(product);
      //saving the product
      await this.productRepo.save(data);
      //logging
      this.log.verbose(`Product with SKU ${product.sku} added Succesfully`);
      //output
      return {
        message: `successful added product ${product.sku}`,
      };
    } catch (error) {
      //Logging Error
      this.log.error(
        `Fail:${
          error.errno === 1062
            ? `product with sku '${product.sku}' already exists`
            : error.sqlMessage
        }`
      );
      //error output
      throw new ConflictException(
        `product with sku '${product.sku}' already exists!`
      );
    }
  }
  async massDelete(ids: DeleteDto) {
    //Pluralize a string
    const pluralize = (count: number, noun: string, suffix = "s") =>
      `${count} ${noun}${count !== 1 ? suffix : ""}`;
    //get number of deleted products
    const { affected: deleted } = await this.productRepo.delete(ids.ids);
    //logging
    this.log.verbose(`Deleted products with ids:${ids.ids}`);
    //return confirmation message
    return {
      message: `successfully deleted ${pluralize(deleted, "product")}`,
    };
  }
}
