import {Admin} from "../../admin/entities/admin.entity";
import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Connection, Repository} from "typeorm";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    private adminRepository: Repository<Admin>

    constructor(
        private jwtService: JwtService,
        private connection: Connection
    ) {
        this.adminRepository = this.connection.getRepository(Admin)
    }

    async validateAdmin(login: string, password: string): Promise<Admin | null> {
        const admin = await this.adminRepository.findOne({where: {login}});

        if (admin && await bcrypt.compare(password, admin.passwordHash)) {
            const {passwordHash, ...secureAdmin} = admin;
            return secureAdmin;
        }

        return null;
    }

    async login(admin: Admin) {
        const payload = {id: admin.id}

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
