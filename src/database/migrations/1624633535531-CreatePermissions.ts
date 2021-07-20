import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePermissions1624633535531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'super',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'super', type: 'varchar' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('super');
  }
}
