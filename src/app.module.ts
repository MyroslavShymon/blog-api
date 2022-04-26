import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from "../ormconfig";
import { AdminModule } from './modules/admin/admin.module';
import {AuthModule} from "./modules/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AdminModule, AuthModule],
})
export class AppModule {}
