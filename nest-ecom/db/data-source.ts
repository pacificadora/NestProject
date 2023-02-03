/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'DB_ECOM',
    migrationsRun: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: ['./dist/db/migrations/*.js'],
    // migrations: ['1674542380145-NewMigrations.ts'],  

};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
