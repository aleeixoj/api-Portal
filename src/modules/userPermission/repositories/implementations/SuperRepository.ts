import { getRepository, Repository } from 'typeorm';

import { Super } from '../../entities/Super';
import {
  ISuperPermissionDTO,
  ISuperPermissionRepository,
} from '../ISuperRepository';

class SuperRepository implements ISuperPermissionRepository {
  private repository: Repository<Super>;
  constructor() {
    this.repository = getRepository(Super);
  }
  async findById(id: string): Promise<Super> {
    const superUser = await this.repository.findOne({ id });
    return superUser;
  }
  async findBySuper(value: number): Promise<Super> {
    const superU = await this.repository.findOne({ value });
    return superU;
  }
  async list(): Promise<Super[]> {
    const all = await this.repository.find({
      order: { value: 'ASC' },
      take: 4,
    });
    return all;
  }
  async create({ label, value }: ISuperPermissionDTO): Promise<void> {
    const createU = this.repository.create({
      label,
      value,
    });
    await this.repository.save(createU);
  }
}

export { SuperRepository };
