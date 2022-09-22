import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as config from "config";

import { NestExpressApplication } from "@nestjs/platform-express";
type Port = {
  port: number;
  prod: any;
  dev:any
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.NODE_ENV === "development"
        ? ["log", "debug", "error", "verbose", "warn"]
        : ["error","log", "warn"],
       
  });
  const server: Port = config.get("server");
  const logger = new Logger("bootstrap");

    app.enableCors();
   

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || server.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
