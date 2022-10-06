import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateComments2664996890178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "comments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: 'ros_id',
                        type: 'uuid',
                    },
                    {
                        name: 'author',
                        type: 'varchar',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'comments',
            new TableForeignKey({
              columnNames: ['ros_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'ROS',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'comments',
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
        await queryRunner.dropTable('comments');
    }

}
