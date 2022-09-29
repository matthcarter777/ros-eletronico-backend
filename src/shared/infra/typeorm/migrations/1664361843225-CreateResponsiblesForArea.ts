import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateResponsiblesForArea1664361843225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        
        await queryRunner.createTable(
            new Table({
                name: "responsibleForArea",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "responsible_area_id",
                        type: "uuid",
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'responsibleForArea',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'responsibleForArea',
            new TableForeignKey({
              columnNames: ['responsible_area_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'responsible-area',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('responsibleForArea');
    }

}
