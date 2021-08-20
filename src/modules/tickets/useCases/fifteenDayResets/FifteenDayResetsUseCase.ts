import { inject, injectable } from 'tsyringe';

import { Resets } from '../../entities/Resets';
import { IResetRepository } from '../../repositories/IResetRepository';

@injectable()
class FifteenDayResetsUseCase {
  constructor(
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}
  async execute(): Promise<[Resets[], number]> {
    const tickets = await this.resetRepository.findFifteenData();
    return tickets;
  }
}

export { FifteenDayResetsUseCase };
