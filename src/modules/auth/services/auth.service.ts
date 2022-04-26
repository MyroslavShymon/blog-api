import {AdminRepository} from "../../admin/services/admin.repository";
import {Admin} from "../../admin/entities/admin.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(private adminRepository: AdminRepository) {
    }

    async validateAdmin(login: string, password: string): Promise<Admin | null> {
        const admin = await this.adminRepository.findByLogin(login);

        if (admin && admin.password === password) {
            const {password, ...secureAdmin} = admin;
            return secureAdmin;
        }

        return null;
    }
}
