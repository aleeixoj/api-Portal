import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('systems')
class Systems {
  @PrimaryColumn()
  id?: string;
  @Column()
  value: string;
  @Column()
  label: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Systems };
