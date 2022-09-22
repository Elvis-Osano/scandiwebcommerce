import { Module } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        url: configService.get("DB_URL"),
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV==="development"?true:false,
        migrationsRun: true, // Will run migrations every time the app starts
        migrations: ["dist/database/migrations/*.js"], // Links to the migrations (in /dist because: after build)
        ...(configService.get("DB_SSL")
          ? {
              ssl: true,
              extra: {
                ssl: {
                  rejectUnauthorized: false,
                },
              },
            }
          : {}),
      }),
    }),
  ],
})
export class DatabaseModule {}
