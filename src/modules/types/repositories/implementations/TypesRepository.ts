import { Repository, getRepository } from 'typeorm';

import { Types } from '../../entities/Types';
import { ITypesCreateDTO, ITypesRepository } from '../ITypesRepository';

class TypesRepository implements ITypesRepository {
  private types: Repository<Types>;
  constructor() {
    this.types = getRepository(Types);
  }
  async delTypeByLabel(label: string): Promise<void> {
    await this.types.delete({ label });
  }
  async findById(id: string): Promise<Types> {
    const types = await this.types.findOne({ id });
    return types;
  }
  async findByLabel(label: string): Promise<Types> {
    const types = await this.types.findOne({ label });
    return types;
  }
  async delTypesByLabel(label: string): Promise<void> {
    await this.types.delete({ label });
  }
  async list(): Promise<Types[]> {
    const types = await this.types.find();
    return types;
  }
  async create({ label, value }: ITypesCreateDTO): Promise<Types> {
    const createTypes = this.types.create({ label, value });
    await this.types.save(createTypes);
    return createTypes;
  }
}

export { TypesRepository };
