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
class UserLoginUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('UserLoginRepository')
    private userLoginRepository: IUserLoginRepository,
    @inject('UserPermissionRepository')
    private permissionRepository: IUserPermissionRepository,
    @inject('SuperPermissionRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  private async createUser(matricula: string): Promise<User> {
    const user = await this.userLoginRepository.findByMat(matricula);
    let color = 'purple';
    if (user.grupo === 'OPERACIONAL') {
      color = 'red';
    }
    if (user.grupo === 'V' || user.grupo === 'WHATSAPP V') {
      color = 'gold';
    }
    const createdUser = await this.userRepository.create({
      matricula: user.matricula_completa,
      name: user.colaborador,
      cargo: user.cargo,
      email: user.snoemail,
      label: user.colaborador,
      value: user.colaborador,
      group: user.grupo,
      color,
    });

    return createdUser;
  }
  async execute({ matricula, result }: IRequest): Promise<void> {
    const dados_user = ActiveDirectory.createUserObj(result.entry);

    const userAlreadyExists = await this.userRepository.findByMat(matricula);
    if (userAlreadyExists) {
      const token = 's';
    }

    if (dados_user.groups.indexOf('AcessosUSR') > -1) {
      if (!userAlreadyExists) {
        const createdUser = await this.createUser(matricula);
        const superU = await this.superRepository.findBySuper(
          createdUser.group === 'OPERACIONAL' ? 2 : 1
        );
        await this.permissionRepository.create({
          user_id: createdUser.id,
          super_id: superU.id,
        });
      }
    } else if (dados_user.groups.indexOf('AcessosADM') > -1) {
      if (!userAlreadyExists) {
        const createdUser = await this.createUser(matricula);
        const superU = await this.superRepository.findBySuper(5);
        await this.permissionRepository.create({
          user_id: createdUser.id,
          super_id: superU.id,
        });
      }
    } else {
      throw new Error('Você não possui acesso a aplicação');
    }
  }
}
export { UserLoginUseCase };
