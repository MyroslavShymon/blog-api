import {AdminRepository} from "../../admin/services/admin.repository";
import {Admin} from "../../admin/entities/admin.entity";
import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private adminRepository: AdminRepository,
        private jwtService: JwtService
    ) {
    }

    async validateAdmin(login: string, password: string): Promise<Admin | null> {
        const admin = await this.adminRepository.findByLogin(login);

        if (admin && admin.password === password) {
            const {password, ...secureAdmin} = admin;
            return secureAdmin;
        }

        return null;
    }

    async login(admin: Admin) {
        const payload = { id: admin.id}

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
