import { Entity } from "typeorm"

@Entity()
export class Admin {
    id: number;
    login: string;
    password?: string;
}
