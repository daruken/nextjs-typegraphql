import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  password: string
  
  @Column()
  @Field()
  email: string

  @Column({name: "created_date"})
  @Field()
  createdDate: Date

  @Column({name: "updated_date"})
  @Field()
  updatedDate: Date
}
