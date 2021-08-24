import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Types } from '../../entities/Types';
import { ITypesRepository } from '../../repositories/ITypesRepository';

@injectable()
class FindAllTypesUseCase {
  constructor(
    @inject('TypesRepository')
    private typesRepository: ITypesRepository
  ) {}
  async execute(): Promise<Types[]> {
    const types = await this.typesRepository.list();
    if (!types) {
      throw new AppError('Não foi possivel buscar');
    }
    return types;
  }
}

export { FindAllTypesUseCase };
