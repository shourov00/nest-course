import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './src/entities/user.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5430, // port running on docker for postgresSql
  username: 'postgres',
  password: 'postgres',
  entities: [User],
  synchronize: true,
};

export default config;
