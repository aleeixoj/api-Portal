import { User } from '../entities/User';

interface ICreateUserDTO {
  matricula: string;
  name: string;
  label: string;
  value: string;
  email: string;
  cargo: string;
  group: string;
  color: string;
}

interface IUserRepository {
  findById(id: string): Promise<User>;
  findByMat(matricula: string): Promise<User>;
  findByGroup(): Promise<User[]>;
  findByName(name: string): Promise<User>;
  list(): Promise<User[]>;
  create({
    name,
    matricula,
    label,
    value,
    email,
    cargo,
    group,
    color,
  }: ICreateUserDTO): Promise<User>;
}

export { IUserRepository, ICreateUserDTO };
