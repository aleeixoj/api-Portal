import jwt from 'jsonwebtoken';
import { ActiveDirectory } from 'node-ad-tools';
import { inject, injectable } from 'tsyringe';

import { User } from '../../../user/entities/User';
import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { IUserPermissionRepository } from '../../../userPermission/repositories/IPermissionRepository';
import { ISuperPermissionRepository } from '../../../userPermission/repositories/ISuperRepository';
import { IUserLoginRepository } from '../../repositories/IUserLoginRepository';

interface IRequest {
  matricula: string;
  result: any;
}

interface IResponse {
  token: string;
  userData: User;
}
@injectable()
class UserLogoutUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({ matricula }: IRequest): Promise<string> {
    if (matricula) {
      return matricula;
    }
  }
}
export { UserLogoutUseCase };
