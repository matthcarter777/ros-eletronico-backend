import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRos2654876762764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "ROS",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "observer_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "company_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "manager_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "shift_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "zone_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "local_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "nature_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "reason_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "suggestion",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "responsible_response",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "isAvail_responsible",
                        type: "boolean",
                        isNullable: true,
                    },
                    {
                        name: "responsible_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "responsible_area_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "status",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "negotiations",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "estimated_date_finish",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "company_area",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "finish_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['observer_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'observer',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        
        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['company_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'company',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        
        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['manager_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'manager',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['shift_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'shift',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['zone_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'zone',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['local_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'local',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['nature_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'nature',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['reason_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'reason',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        
        await queryRunner.createForeignKey(
            'ROS',
            new TableForeignKey({
                columnNames: ['responsible_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'ROS',
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
        await queryRunner.dropTable('ROS');
    }

}
