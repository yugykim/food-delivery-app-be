import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//entities :: model in the DB
//creating Obj type
//Graphql entities and TypeOrm entities are similar -> using decorator, graphql takes shema and entitie decoraters.
//we need to tell to put the data to TypeORM.
//using ObjectType and Entity
@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Field(() => String)
  @Column()
  @Length(5)
  name: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  //beacuse it is nullable, isGood?
  isVegan?: boolean;

  @Field(() => String, { defaultValue: 'calgary' })
  @Column()
  @IsString()
  address: string;
}
