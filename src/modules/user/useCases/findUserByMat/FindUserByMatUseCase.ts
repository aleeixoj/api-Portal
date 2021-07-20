import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class FindUserByMatUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(matricula: string): Promise<User> {
    const user = await this.userRepository.findByMat(matricula);
    return user;
  }
}

export { FindUserByMatUseCase };
