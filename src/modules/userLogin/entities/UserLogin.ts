import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('colab')
class UserLogin {
  @CreateDateColumn()
  @PrimaryColumn()
  ddtregistro?: Date;
  @Column()
  matricula_completa: string;
  @Column()
  colaborador: string;
  @Column()
  supervisor: string;
  @Column()
  grupo: string;
  @Column()
  subgrupo1: string;
  @Column()
  situacao: string;
  @Column()
  cidade: string;
  @Column()
  cargo: string;
  @Column()
  matricula: string;
  @Column()
  snoemail: string;
}
export { UserLogin };
