import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Injectable()
export class LocalStrategyService extends PassportStrategy(Strategy){
    constructor(private authService: AuthService) {
        super({
            usernameField: 'login'
        });
    }

    async validate(login: string, password: string): Promise<any> {
        const admin = this.authService.validateAdmin(login, password);

        if (!admin) {
            throw new UnauthorizedException();
        }

        return admin;
    }
}
