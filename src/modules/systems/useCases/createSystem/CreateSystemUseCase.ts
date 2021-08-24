import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import {
  ISystemsCreateDTO,
  ISystemsRepository,
} from '../../repositories/ISystemsRepository';

@injectable()
class CreateSystemUseCase {
  constructor(
    @inject('SystemsRepository')
    private systemsRepository: ISystemsRepository
  ) {}
  async execute({ label, value }: ISystemsCreateDTO): Promise<void> {
    const create = await this.systemsRepository.create({ value, label });
    if (!create) {
      throw new AppError('Não foi possivel criar');
    }
  }
}

export { CreateSystemUseCase };
