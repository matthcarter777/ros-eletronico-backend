import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddEmailColumnOnResponsible1655390479503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "responsible",
            new TableColumn({
                name: "email",
                type: "varchar"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("responsible", "email")
    }

}
