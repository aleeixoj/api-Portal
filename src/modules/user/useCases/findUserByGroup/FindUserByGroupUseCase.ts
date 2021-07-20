import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class FindUserByGroupUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const user = await this.userRepository.findByGroup();
    if (!user) {
      throw new Error('Nenhum usuário encontrado no grupo Operacional');
    }
    return user;
  }
}

export { FindUserByGroupUseCase };
