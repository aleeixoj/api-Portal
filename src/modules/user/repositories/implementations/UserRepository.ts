import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async update({ id, permission }: ICreateUserDTO): Promise<void> {
    await this.repository.update(id, {
      permission,
    });
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
      relations: ['permissions'],
    });
    return user;
  }
  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }
  async findByGroup(): Promise<User[]> {
    const users = await this.repository.find({ group: 'OPERACIONAL' });
    return users;
  }
  async findByMat(matricula: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { matricula },
      relations: ['permissions'],
    });
    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.repository.find({ relations: ['permissions'] });
    return users;
  }
  async create({
    name,
    matricula,
    label,
    value,
    email,
    cargo,
    group,
    color,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      matricula,
      label,
      value,
      email,
      cargo,
      group,
      color,
    });

    const createdUser = await this.repository.save(user);
    return createdUser;
  }
}

export { UserRepository };
