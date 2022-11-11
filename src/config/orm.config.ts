import { DataSource, DataSourceOptions } from 'typeorm'
import { Member } from '../../server/services/member.entity'

const mainOptions: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  username: 'zzimkong',
  password: 'khjjhr0330',
  database: 'zzimkong',
  port: 3306,
  entities: [Member]
}

export const AppDataSource = new DataSource({ ...mainOptions })
