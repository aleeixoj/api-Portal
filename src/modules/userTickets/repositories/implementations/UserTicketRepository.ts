import { getRepository, Repository } from 'typeorm';

import { UserTickets } from '../../entities/UserTickets';
import {
  IUserTicketsCreateDTO,
  IUserTicketsRepository,
} from '../IUserTicketRepository';

class UserTicketsRepository implements IUserTicketsRepository {
  private userTicket: Repository<UserTickets>;
  constructor() {
    this.userTicket = getRepository(UserTickets);
  }
  async findById(id: string): Promise<UserTickets> {
    const ticket = await this.userTicket.findOne(id);
    return ticket;
  }
  async updateById({
    user_id,
    nchamado,
  }: IUserTicketsCreateDTO): Promise<void> {
    await this.userTicket.update(nchamado, { user_id });
  }
  async create({ user_id, nchamado }: IUserTicketsCreateDTO): Promise<void> {
    const create = this.userTicket.create({
      user_id,
      nchamado,
    });

    await this.userTicket.save(create);
  }
}

export { UserTicketsRepository };
