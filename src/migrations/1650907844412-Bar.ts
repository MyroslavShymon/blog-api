import { MigrationInterface, QueryRunner } from "typeorm";

export class Bar1650907844412 implements MigrationInterface {
    name = 'Bar1650907844412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aaa_entity" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aaa_entity" DROP COLUMN "name"`);
    }

}
