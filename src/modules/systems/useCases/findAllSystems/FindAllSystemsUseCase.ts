import { inject, injectable } from 'tsyringe';

import { Systems } from '../../entities/Systems';
import {
  ISystemsCreateDTO,
  ISystemsRepository,
} from '../../repositories/ISystemsRepository';

@injectable()
class FindAllSystemsUseCase {
  constructor(
    @inject('SystemsRepository')
    private systemsRepository: ISystemsRepository
  ) {}
  async execute(): Promise<Systems[]> {
    const systems = await this.systemsRepository.list();
    if (!systems) {
      throw new Error('Não foi possivel buscar');
    }
    return systems;
  }
}

export { FindAllSystemsUseCase };
