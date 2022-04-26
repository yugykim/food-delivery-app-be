import { Field, ObjectType } from '@nestjs/graphql';

//entities :: module in the DB
//creating Obj type
@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  //beacuse it is nullable, isGood?
  isVegan?: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownersName: string;
}
