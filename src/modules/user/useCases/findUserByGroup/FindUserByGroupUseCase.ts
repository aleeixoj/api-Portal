import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
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
      throw new AppError('Nenhum usuário encontrado no grupo Operacional', 404);
    }
    return user;
  }
}

export { FindUserByGroupUseCase };
