import { Args, ID, Mutation, Query, Resolver } from 'type-graphql'
import { AppDataSource } from '../../src/config/orm.config'
import { Member } from './member.entity'

@Resolver(() => Member)
export class MemberResolver {
  @Query(() => [Member])
  async members() {
    return AppDataSource.manager.find(Member)
  }
}
