import { inject, injectable } from 'tsyringe';

import { Resets } from '../../entities/Resets';
import { IResetRepository } from '../../repositories/IResetRepository';

@injectable()
class SevenDayResetsUseCase {
  constructor(
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}
  async execute(): Promise<[Resets[], number]> {
    const resets = await this.resetRepository.findSevenData();
    return resets;
  }
}

export { SevenDayResetsUseCase };
