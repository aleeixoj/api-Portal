import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('super')
class Super {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  super: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Super };
