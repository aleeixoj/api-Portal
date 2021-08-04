import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FindTicketByNChamadoUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(nchamado: string): Promise<Tickets> {
    const tickets = await this.ticketsRepository.findByNchamado(nchamado);
    if (!tickets) {
      throw new Error('Chamado não encontrado');
    }
    return tickets;
  }
}

export { FindTicketByNChamadoUseCase };
