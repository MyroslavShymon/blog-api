import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    login: string;

    @Column({type: 'varchar', nullable: false})
    passwordHash?: string;

    @Column({type: 'varchar', nullable: false})
    nickName?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updateAt?: Date;
}
