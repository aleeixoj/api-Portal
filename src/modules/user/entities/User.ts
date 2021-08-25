import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Permission } from '../../userPermission/entities/Permission';
import { Super } from '../../userPermission/entities/Super';

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

  // @JoinTable({ name: 'super_user' })
  @JoinColumn({ name: 'permission' })
  @OneToOne(() => Super)
  permissions: Super[];

  // @JoinTable({ name: 'super' })
  // @JoinColumn({ name: 'id' })
  // @OneToOne(() => Permission)
  // permission: Permission[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
