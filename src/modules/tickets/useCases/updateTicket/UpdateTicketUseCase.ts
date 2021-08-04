import { inject, injectable } from 'tsyringe';

import { IResetRepository } from '../../repositories/IResetRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

interface IRequest {
  id?: string;
  status: string;
  user: string | string[];
  arquivo?: string;
  nchamado?: string;
  description: string;
}
@injectable()
class UpdateTicketUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRespository: ITicketsRepository,
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}

  async execute({
    status,
    user,
    arquivo,
    description,
    id,
  }: IRequest): Promise<void> {
    const reset = await this.resetRepository.findById(id);
    const ticket = await this.ticketsRespository.findById(id);
    const iUser: string = user.toString();

    if (reset) {
      await this.resetRepository.updateTicket({
        iUser,
        id,
        description,
        arquivo,
      });
    }
    if (ticket) {
      await this.ticketsRespository.updateTicket({
        iUser,
        id,
        description,
        arquivo,
        status,
      });
    }
  }
}
export { UpdateTicketUseCase };
