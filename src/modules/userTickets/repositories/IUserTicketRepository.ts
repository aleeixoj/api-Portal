import { UserTickets } from '../entities/UserTickets';

interface IUserTicketsCreateDTO {
  user_id: string;
  nchamado: string;
}

interface IUserTicketsRepository {
  create({ user_id, nchamado }: IUserTicketsCreateDTO): Promise<void>;
  findById(id: string): Promise<UserTickets>;
  updateById({ user_id, nchamado }: IUserTicketsCreateDTO): Promise<void>;
}

export { IUserTicketsCreateDTO, IUserTicketsRepository };
