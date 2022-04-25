import { MigrationInterface, QueryRunner } from "typeorm";

export class Foo1650907309354 implements MigrationInterface {
    name = 'Foo1650907309354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aaa_entity" ("id" SERIAL NOT NULL, CONSTRAINT "PK_91414997fdfe7e961129bb3100d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "aaa_entity"`);
    }

}
