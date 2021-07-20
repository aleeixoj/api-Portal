import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePermissionUsers1624634232241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'super_user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'super_id', type: 'uuid' },
          { name: 'user_id', type: 'uuid' },
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKSuper',
            referencedTableName: 'super',
            referencedColumnNames: ['id'],
            columnNames: ['super_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('super_user');
  }
}
