import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '../../user/entities/User';
import { Super } from './Super';

@Entity('super_user')
class Permission {
  @PrimaryColumn()
  id?: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;
  @Column()
  user_id: string;

  @JoinColumn({ name: 'super_id' })
  @ManyToOne(() => Super)
  super: Super;
  @Column()
  super_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Permission };
