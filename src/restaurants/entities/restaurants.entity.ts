import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//entities :: model in the DB
//creating Obj type
//Graphql entities and TypeOrm entities are similar -> using decorator, graphql takes shema and entitie decoraters.
//we need to tell to put the data to TypeORM.
//using ObjectType and Entity
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Boolean, { nullable: true })
  @Column()
  //beacuse it is nullable, isGood?
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  ownersName: string;

  @Field(() => String)
  @Column()
  categoryName: string;
}
