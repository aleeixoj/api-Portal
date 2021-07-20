import { UserLogin } from '../entities/UserLogin';

interface ICreateUserLoginDTO {
  matricula: string;
  name: string;
  label: string;
  value: string;
  email: string;
  cargo: string;
  group: string;
  color: string;
}

interface IUserLoginRepository {
  findByMat(matricula: string): Promise<UserLogin>;
  findByGroup(): Promise<UserLogin[]>;
  findByName(name: string): Promise<UserLogin>;
  list(): Promise<UserLogin[]>;
  create({
    name,
    matricula,
    label,
    value,
    email,
    cargo,
    group,
    color,
  }: ICreateUserLoginDTO): Promise<void>;
}

export { IUserLoginRepository, ICreateUserLoginDTO };
