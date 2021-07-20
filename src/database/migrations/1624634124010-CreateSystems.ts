import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSystems1624634124010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'systems',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'label', type: 'varchar', isNullable: false },
          { name: 'value', type: 'varchar', isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('systems');
  }
}
