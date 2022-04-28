import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from "../ormconfig";
import {AdminModule} from './modules/admin/admin.module';
import {AuthModule} from "./modules/auth/auth.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        ConfigModule.forRoot(),
        AdminModule,
        AuthModule
    ],
})
export class AppModule {
}
