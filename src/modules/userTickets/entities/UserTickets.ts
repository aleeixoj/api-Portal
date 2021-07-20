import { Column, JoinColumn, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Tickets } from '../../tickets/entities/Tickets';
import { User } from '../../user/entities/User';

@Entity('chamado_user')
class UserTickets {
  @PrimaryColumn()
  id?: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;
  @Column()
  user_id: string;

  @JoinColumn({ name: 'nchamado' })
  @ManyToOne(() => Tickets)
  tickets: Tickets;
  @Column()
  nchamado: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserTickets };
