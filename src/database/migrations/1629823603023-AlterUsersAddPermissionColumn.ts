import { query } from 'express';
import {
  MigrationInterface,
  QueryRunner,
  Raw,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterUsersAddPermissionColumn1629823603023
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const [{ id }] = await queryRunner.query(
      `SELECT id FROM public.super WHERE name = 'consulta'`
    );
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'permission',
        type: 'uuid',
        default: `'${id}'`,
      })
    );
    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        name: 'FKPermission',
        columnNames: ['permission'],
        referencedColumnNames: ['id'],
        referencedTableName: 'super',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'permission');
    await queryRunner.dropForeignKey('user', 'FKPermission');
  }
}
