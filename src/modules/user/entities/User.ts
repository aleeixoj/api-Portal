import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('user')
class User {
  @PrimaryColumn()
  id?: string;
  @Column()
  matricula: string;
  @Column()
  name: string;
  @Column()
  label: string;
  @Column()
  value: string;
  @Column()
  email: string;
  @Column()
  cargo: string;
  @Column()
  group: string;
  @Column()
  color: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  lastModified: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
