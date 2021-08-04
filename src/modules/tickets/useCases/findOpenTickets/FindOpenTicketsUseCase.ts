import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FindOpenTicketsUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(): Promise<Tickets[]> {
    const tickets = await this.ticketsRepository.findOpenTicket();
    return tickets;
  }
}

export { FindOpenTicketsUseCase };
