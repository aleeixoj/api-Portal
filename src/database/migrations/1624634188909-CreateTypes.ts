import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTypes1624634188909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'type',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'label', type: 'varchar', isNullable: false },
          { name: 'value', type: 'varchar', isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('type');
  }
}
