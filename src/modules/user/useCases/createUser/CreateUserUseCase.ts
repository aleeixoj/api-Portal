import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  matricula: string;
  name: string;
  label: string;
  value: string;
  email: string;
  cargo: string;
  group: string;
  color: string;
}
@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({
    matricula,
    name,
    label,
    value,
    email,
    cargo,
    group,
    color,
  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByMat(matricula);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    this.userRepository.create({
      matricula,
      name,
      label,
      value,
      email,
      cargo,
      group,
      color,
    });
  }
}

export { CreateUserUseCase };
