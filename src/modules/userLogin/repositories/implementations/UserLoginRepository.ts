import { getRepository, Repository } from 'typeorm';

import { UserLogin } from '../../entities/UserLogin';
import {
  ICreateUserLoginDTO,
  IUserLoginRepository,
} from '../IUserLoginRepository';

class UserLoginRepository implements IUserLoginRepository {
  private repository: Repository<UserLogin>;
  constructor() {
    this.repository = getRepository(UserLogin);
  }
  async findByName(name: string): Promise<UserLogin> {
    const user = await this.repository.findOne({ colaborador: name });
    return user;
  }
  async findByGroup(): Promise<UserLogin[]> {
    const users = await this.repository.find({ grupo: 'OPERACIONAL' });
    return users;
  }
  async findByMat(matricula: string): Promise<UserLogin> {
    const user = await this.repository.findOne({
      matricula_completa: matricula,
    });
    return user;
  }
  async list(): Promise<UserLogin[]> {
    const users = await this.repository.find();
    return users;
  }
  create({
    name,
    matricula,
    label,
    value,
    email,
    cargo,
    group,
    color,
  }: ICreateUserLoginDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UserLoginRepository };
