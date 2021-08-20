import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FifteenDaysTicketsUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(): Promise<[Tickets[], number]> {
    const tickets = await this.ticketsRepository.findFifteenData();
    return tickets;
  }
}

export { FifteenDaysTicketsUseCase };
