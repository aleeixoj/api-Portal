import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { IUserTicketsRepository } from '../../../userTickets/repositories/IUserTicketRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

interface IRequest {
  id: string;
  data: string;
}
@injectable()
class RouteTicketToUserUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRespository: ITicketsRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('UserTicketsRepository')
    private userTicketRepository: IUserTicketsRepository
  ) {}

  async execute({ id, data }: IRequest): Promise<void> {
    const user = await this.userRepository.findByName(data);
    await this.ticketsRespository.updateRespoById(
      id,
      user.matricula,
      user.name
    );

    const find = await this.userTicketRepository.findById(id);

    if (!find) {
      await this.userTicketRepository.create({
        nchamado: id,
        user_id: user.id,
      });
    }

    await this.userTicketRepository.updateById({
      nchamado: id,
      user_id: user.id,
    });
  }
}
export { RouteTicketToUserUseCase };
