import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1624632763400 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'matricula', type: 'varchar' },
          { name: 'name', type: 'varchar' },
          { name: 'label', type: 'varchar' },
          { name: 'value', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'cargo', type: 'varchar' },
          { name: 'group', type: 'varchar' },
          { name: 'color', type: 'varchar' },
          { name: 'createdAt', type: 'timestamp', default: 'now()' },
          { name: 'lastModified', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
