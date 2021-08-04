import { inject, injectable } from 'tsyringe';

import { Resets } from '../../entities/Resets';
import { IResetRepository } from '../../repositories/IResetRepository';

@injectable()
class FindOpenResetsUseCase {
  constructor(
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}
  async execute(): Promise<Resets[]> {
    const tickets = await this.resetRepository.findOpenReset();
    return tickets;
  }
}

export { FindOpenResetsUseCase };
