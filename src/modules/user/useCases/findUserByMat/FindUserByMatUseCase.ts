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
    private userRepository: IUserRepository,
    @inject('UserPermissionRepository')
    private userPermissionRepository: IUserPermissionRepository,
    @inject('SuperPermissionRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  async execute(matricula: string): Promise<IData> {
    const user = await this.userRepository.findByMat(matricula);
    const permission = await this.userPermissionRepository.findById(user.id);
    const superUser = await this.superRepository.findById(permission.super_id);

    return { user, superUser };
  }
}

export { FindUserByMatUseCase };
