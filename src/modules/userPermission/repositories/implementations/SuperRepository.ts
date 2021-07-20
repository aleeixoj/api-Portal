import { getRepository, Repository } from 'typeorm';

import { Super } from '../../entities/Super';
import {
  ISuperPermissionDTO,
  ISuperPermissionRepository,
} from '../ISuperRepository';

class SuperPermissionRepository implements ISuperPermissionRepository {
  private repository: Repository<Super>;
  constructor() {
    this.repository = getRepository(Super);
  }
  async findBySuper(superNumber: number): Promise<Super> {
    const superU = await this.repository.findOne({ super: superNumber });
    return superU;
  }
  async list(): Promise<Super[]> {
    const all = await this.repository.find();
    return all;
  }
  async create({ name, superNumber }: ISuperPermissionDTO): Promise<void> {
    const createU = this.repository.create({
      name,
      super: superNumber,
    });
    await this.repository.save(createU);
  }
}

export { SuperPermissionRepository };
