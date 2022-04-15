import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 3005,
    username: 'postgres',
    password: 'password',
    host: '127.0.0.1',
    database: 'postgres',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
};
