import { Module } from '@nestjs/common';
import {AuthService} from "./services/auth.service";
import {AdminModule} from "../admin/admin.module";

@Module({
    imports: [AdminModule],
    providers: [AuthService]
})
export class AuthModule {}
