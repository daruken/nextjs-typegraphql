import 'reflect-metadata'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { buildSchema, Query, Resolver } from 'type-graphql'
import { AppDataSource } from '../../src/config/orm.config'
import { MemberResolver } from '../../server/services/member/member.resolver'

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }
}

const schema = await buildSchema({
  resolvers: [HelloResolver, MemberResolver],
})

const server = new ApolloServer({
  schema,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
  }

  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
}
