import { Repository, getRepository } from 'typeorm';

import { Systems } from '../../entities/Systems';
import { ISystemsCreateDTO, ISystemsRepository } from '../ISystemsRepository';

class SystemRepository implements ISystemsRepository {
  private system: Repository<Systems>;
  constructor() {
    this.system = getRepository(Systems);
  }
  async findById(id: string): Promise<Systems> {
    const system = await this.system.findOne({ id });
    return system;
  }
  async findByLabel(label: string): Promise<Systems> {
    const system = await this.system.findOne({ label });
    return system;
  }
  async delSystemByLabel(label: string): Promise<void> {
    await this.system.delete({ label });
  }
  async list(): Promise<Systems[]> {
    const systems = await this.system.find();
    return systems;
  }
  async create({ label, value }: ISystemsCreateDTO): Promise<Systems> {
    const createSystem = this.system.create({ label, value });
    await this.system.save(createSystem);
    return createSystem;
  }
}

export { SystemRepository };
