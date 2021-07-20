import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { IUserTicketsRepository } from '../../../userTickets/repositories/IUserTicketRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

interface IRequest {
  id: string;
  respo: string | string[];
}

@injectable()
class AssignTicketToUserUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRespository: ITicketsRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('UserTicketsRepository')
    private userTicketRepository: IUserTicketsRepository
  ) {}

  async execute({ id, respo }: IRequest): Promise<void> {
    const user = await this.userRepository.findByMat(respo.toString());
    const user_id = user.id;

    const buscaSql = await this.ticketsRespository.findById(id);
    await this.ticketsRespository.updateRespoById(id, respo.toString());
    await this.userTicketRepository.create({
      user_id,
      nchamado: id,
    });
  }
}
export { AssignTicketToUserUseCase };
