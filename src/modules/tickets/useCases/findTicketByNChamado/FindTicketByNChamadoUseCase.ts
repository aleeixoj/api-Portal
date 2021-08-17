import { inject, injectable } from 'tsyringe';

import { Resets } from '../../entities/Resets';
import { Tickets } from '../../entities/Tickets';
import { IResetRepository } from '../../repositories/IResetRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FindTicketByNChamadoUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository,
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}

  // eslint-disable-next-line consistent-return
  async execute(nchamado: string): Promise<Tickets | Resets> {
    const tickets = await this.ticketsRepository.findByNchamado(nchamado);
    const resets = await this.resetRepository.findByNchamado(nchamado);

    if (tickets) {
      return tickets;
    }
    if (resets) {
      return resets;
    }
    throw new Error('Chamado não encontrado');
  }
}

export { FindTicketByNChamadoUseCase };
