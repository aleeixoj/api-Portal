import { inject, injectable } from 'tsyringe';

import {
  ITypesCreateDTO,
  ITypesRepository,
} from '../../repositories/ITypesRepository';

@injectable()
class CreateTypesUseCase {
  constructor(
    @inject('TypesRepository')
    private typesRepository: ITypesRepository
  ) {}
  async execute({ label, value }: ITypesCreateDTO): Promise<void> {
    const create = await this.typesRepository.create({ value, label });
    if (!create) {
      throw new Error('Não foi possivel criar');
    }
  }
}

export { CreateTypesUseCase };
