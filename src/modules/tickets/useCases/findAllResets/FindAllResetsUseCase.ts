import { inject, injectable } from 'tsyringe';

import { Resets } from '../../entities/Resets';
import { IResetRepository } from '../../repositories/IResetRepository';

@injectable()
class FindAllResetsUseCase {
  constructor(
    @inject('ResetRepository')
    private resetsRepository: IResetRepository
  ) {}
  async execute(): Promise<Resets[]> {
    const tickets = await this.resetsRepository.list();
    return tickets;
  }
}

export { FindAllResetsUseCase };
