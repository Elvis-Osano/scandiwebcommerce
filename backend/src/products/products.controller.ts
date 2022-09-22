import { DeleteDto, ProductDto } from "@Dto";
import { Body, Controller, Delete, Get, Post, Logger } from "@nestjs/common";

import { ProductsService } from "./products.service";

@Controller("api")
export class ProductsController {
  private log = new Logger("productsController");
  constructor(private productService: ProductsService) {}
  @Get()
  async getProducts() {
    this.log.verbose("Retrieving all products");
    return this.productService.getProducts();
  }
  @Post()
  async addProduct(@Body() product: ProductDto) {
    this.log.verbose(`Adding new product with SKU ${product.sku}`);
    return this.productService.addProduct(product);
  }
  @Delete("delete")
  async massDelete(@Body() ids: DeleteDto) {
    this.log.verbose("Mass product Deletion");
    return this.productService.massDelete(ids);
  }
}
