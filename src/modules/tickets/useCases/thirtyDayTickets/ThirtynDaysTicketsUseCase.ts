import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class ThirtynDaysTicketsUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(): Promise<[Tickets[], number]> {
    const tickets = await this.ticketsRepository.findThirtyData();
    return tickets;
  }
}

export { ThirtynDaysTicketsUseCase };
