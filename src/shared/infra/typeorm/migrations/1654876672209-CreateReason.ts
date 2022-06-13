import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateReason1654876672209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        
        await queryRunner.createTable(
            new Table({
                name: "reason",
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
                        name: "nature_id",
                        type: "uuid",
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'reason',
            new TableForeignKey({
              columnNames: ['nature_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'nature',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reason');
    }

}
