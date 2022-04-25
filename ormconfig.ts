import {DataSource, DataSourceOptions} from "typeorm";

const typeOrmConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '22864231',
    database: 'blog',
    dropSchema: false,
    synchronize: true,
    migrationsRun: false,
    logging: true,
    migrationsTableName: 'migrations',
    name: 'default',
    entities: ['src/**.entity{.ts,.js}'],
    migrations: ['src/migrations'],
    // subscribers: ['src/subscriber/**/*{.ts,.js}'],
    // entities: [
    //     'dist/entity/*{.js,.ts}'
    // ],
    // migrations: [
    //     'dist/migration/*{.js,.ts}'
    // ],
    // subscribers: [
    //     'dist/subscriber/*{.js,.ts}'
    // ],
}
const connectionSource = new DataSource(typeOrmConfig);

// package.json scripts
// "typeorm:migration:create": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create ",
//  "typeorm:migration:run": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run",

export {connectionSource, typeOrmConfig}
