import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateObserver1654876719568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "observer",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "company_id",
                        type: "uuid",
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'observer',
            new TableForeignKey({
              columnNames: ['company_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'company',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('observer');
    }

}
