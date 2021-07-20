import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('chamados')
class Tickets {
  @PrimaryColumn()
  id?: string;
  @Column()
  position: string;
  @Column()
  color: string;
  @Column()
  nchamado: string;
  @Column()
  requisitante: string;
  @Column()
  sistema: string;
  @Column()
  tipo: string;
  @Column()
  massivo: string;
  @Column()
  matricula: string;
  @Column()
  status: string;
  @Column()
  responsavel: string;
  @Column()
  group: string;
  @Column()
  espelho: string;
  @Column()
  desc: string;
  @Column()
  archive?: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  lastModified: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tickets };
