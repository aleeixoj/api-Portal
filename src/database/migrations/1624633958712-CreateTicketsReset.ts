import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTicketsReset1624633958712 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'resets',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'color', type: 'varchar' },
          {
            name: 'position',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nchamado', type: 'varchar', isNullable: true },
          { name: 'requisitante', type: 'varchar' },
          { name: 'sistema', type: 'varchar' },
          { name: 'tipo', type: 'varchar' },
          { name: 'massivo', type: 'varchar' },
          { name: 'matricula', type: 'varchar' },
          {
            name: 'status',
            type: 'varchar',
          },
          { name: 'responsavel', type: 'varchar' },
          { name: 'group', type: 'varchar' },
          { name: 'desc', type: 'varchar' },
          { name: 'archive', type: 'varchar', isNullable: true },
          { name: 'created', type: 'timestamp', default: 'now()' },
          { name: 'lastModified', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('resets');
  }
}
