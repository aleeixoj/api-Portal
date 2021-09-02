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
class FindUserByIdUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('UserPermissionRepository')
    private userPermissionRepository: IUserPermissionRepository,
    @inject('SuperRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    return user;
  }
}

export { FindUserByIdUseCase };
