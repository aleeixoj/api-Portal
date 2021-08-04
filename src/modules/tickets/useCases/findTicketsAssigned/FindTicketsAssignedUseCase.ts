import { inject, injectable } from 'tsyringe';

import { Tickets } from '../../entities/Tickets';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

@injectable()
class FindTicketsAssignedUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository
  ) {}
  async execute(responsavel: string): Promise<Tickets[]> {
    const tickets = await this.ticketsRepository.findAssignedTickets(
      responsavel
    );
    return tickets;
  }
}

export { FindTicketsAssignedUseCase };
