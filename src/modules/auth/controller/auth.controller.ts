import {Controller, Post, UseGuards, Request, Get} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "../services/auth.service";
import {Connection, Repository} from "typeorm";
import {Admin} from "../../admin/entities/admin.entity";

@Controller('auth')
export class AuthController {
    private adminRepository: Repository<Admin>

    constructor(
        private authService: AuthService,
        private connection: Connection
    ) {
        this.adminRepository = this.connection.getRepository(Admin)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('refresh')
    async refresh (@Request() req) {
        const admin = await this.adminRepository.findOne({where: {id: req.user.id}})
        return this.authService.login(admin);
    }
}
