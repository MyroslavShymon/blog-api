import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import {AdminRepository} from "./services/admin.repository";

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
  exports: [AdminRepository]
})
export class AdminModule {}
