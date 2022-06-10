import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateForgotPassword1650547506581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        
        await queryRunner.createTable(
            new Table({
                name: "forgot_password",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'forgot_password',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
