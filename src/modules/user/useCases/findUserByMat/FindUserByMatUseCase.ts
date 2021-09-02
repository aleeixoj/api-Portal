import { inject, injectable } from 'tsyringe';

import { Permission } from '../../../userPermission/entities/Permission';
import { Super } from '../../../userPermission/entities/Super';
import { IUserPermissionRepository } from '../../../userPermission/repositories/IPermissionRepository';
import { ISuperPermissionRepository } from '../../../userPermission/repositories/ISuperRepository';
import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IData {
  user: User;
  superUser?: Super;
}

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
