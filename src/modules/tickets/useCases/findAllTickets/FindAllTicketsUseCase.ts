import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FindAllTicketsUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(): Promise<Tickets[]> {
    const tickets = await this.ticketsRepository.list();
    return tickets;
  }
}

export { FindAllTicketsUseCase };
