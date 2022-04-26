import {Admin} from "../entities/admin.entity";

export class AdminRepository {
    private readonly admins: Admin[];

    constructor() {
        this.admins = [
            {
                id: 1,
                login: 'shymon',
                password: 'secret'
            }
        ]
    }

    async findByLogin(login: string): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.login === login);
    }

}
