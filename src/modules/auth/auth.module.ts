import {Module} from '@nestjs/common';
import {AuthService} from "./services/auth.service";
import {AdminModule} from "../admin/admin.module";
import {LocalStrategyService} from "./services/local-strategy.service";
import {PassportModule} from "@nestjs/passport";
import {AuthController} from "./controller/auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtStrategyService} from "./services/jwt-strategy.service";

@Module({
    imports: [
        AdminModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>("JWT_SECRET"),
                signOptions: {expiresIn: configService.get<string>('JWT_EXPIRES_IN')}
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategyService,
        JwtStrategyService
    ]
})
export class AuthModule {
}
