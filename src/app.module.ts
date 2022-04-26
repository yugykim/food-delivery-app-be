import { Module } from '@nestjs/common';
import * as Joi from 'joi'; // the way of importing a package written by javascript
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

console.log(Joi);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //if it is deveopment, we use dev.env, if not we use .test.env
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(), //validate environment(Schema) -> safe security. it makes being availbe to check wether process.env has variable or not
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
      //save configurations to .env file
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT, //by default, everything from env is string, "+"" string -> number
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
