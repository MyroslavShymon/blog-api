import { MigrationInterface, QueryRunner } from "typeorm"

export class dropTableAaa1650908162812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aaa_entity");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
