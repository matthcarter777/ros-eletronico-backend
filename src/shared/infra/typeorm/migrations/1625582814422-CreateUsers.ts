import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1625582814422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "roles_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              columnNames: ['roles_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'roles',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
