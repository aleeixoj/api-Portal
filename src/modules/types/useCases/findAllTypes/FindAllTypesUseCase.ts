import { inject, injectable } from 'tsyringe';

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
      throw new Error('Não foi possivel buscar');
    }
    return types;
  }
}

export { FindAllTypesUseCase };
