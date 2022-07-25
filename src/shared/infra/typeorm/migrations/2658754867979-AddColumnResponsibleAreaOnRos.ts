import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddColumnResponsibleAreaOnRos2658754867979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "ROS",
            new TableColumn({
                name: "responsible_area_id",
                type: "uuid",
                isNullable: true,
            })
        )
                
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
        await queryRunner.dropColumn("ROS", "responsible_area_id")
    }

}
