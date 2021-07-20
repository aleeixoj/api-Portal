import { inject, injectable } from 'tsyringe';

import { IResetRepository } from '../../repositories/IResetRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

interface IRequest {
  id: string;
  descr: string;
  user: string | string[];
  arquivo?: string;
}
@injectable()
class CloseTicketsUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketsRespository: ITicketsRepository,
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}

  async execute({ id, descr, user, arquivo }: IRequest): Promise<void> {
    const reset = await this.resetRepository.findById(id);
    const ticket = await this.ticketsRespository.findById(id);
    const iUser: string = user.toString();

    if (reset) {
      await this.resetRepository.closeTiket({
        iUser,
        id,
        descr,
        arquivo,
      });
    }
    if (ticket) {
      await this.ticketsRespository.closeTiket({
        iUser,
        id,
        descr,
        arquivo,
      });
    }
  }
}
export { CloseTicketsUseCase };
