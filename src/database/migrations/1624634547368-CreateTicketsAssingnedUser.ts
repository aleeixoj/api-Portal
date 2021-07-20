import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTicketsAssingnedUser1624634547368
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chamado_user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'user_id', type: 'uuid' },
          { name: 'nchamado', type: 'uuid' },
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
            name: 'FKTickets',
            referencedTableName: 'chamados',
            referencedColumnNames: ['id'],
            columnNames: ['nchamado'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chamado_user');
  }
}
