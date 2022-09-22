import { Module } from "@nestjs/common";

import { ProductsModule } from "./products/products.module";

import { ConfigModule } from "@nestjs/config";
import { ProductsController } from "./products/products.controller";
import { ProductsService } from "./products/products.service";

import { DatabaseModule } from "./database/database.module";
import * as Joi from "joi";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().default("development"),
        DB_URL: Joi.string().required(),
        DB_SSL: Joi.boolean().default(false),
      }),
    }),
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
