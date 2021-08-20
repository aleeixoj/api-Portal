import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('type')
class Types {
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

export { Types };
