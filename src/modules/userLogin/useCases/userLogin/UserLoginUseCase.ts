import { sign } from 'jsonwebtoken';
import { ActiveDirectory } from 'node-ad-tools';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
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
  createdUser: User;
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
    @inject('SuperRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  private async createUser(matricula: string): Promise<[User, string]> {
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
    const token = sign({}, 'edc038fa909a460a73448bfc5c9af047', {
      subject: createdUser.id,
      expiresIn: '1d',
    });
    return [createdUser, token];
  }
  async execute({ matricula, result }: IRequest): Promise<string> {
    const dados_user = ActiveDirectory.createUserObj(result.entry);

    const userAlreadyExists = await this.userRepository.findByMat(matricula);
    if (userAlreadyExists) {
      const token = sign({}, 'edc038fa909a460a73448bfc5c9af047', {
        subject: userAlreadyExists.id,
        expiresIn: '1d',
      });
      return token;
    }
    if (dados_user.groups.indexOf('AcessosUSR') > -1) {
      if (!userAlreadyExists) {
        const createdUser = await this.createUser(matricula);
        const superU = await this.superRepository.findBySuper(
          createdUser[0].group === 'OPERACIONAL' ? 2 : 1
        );
        await this.userRepository.update({
          id: createdUser[0].id,
          permission: superU.id,
        });

        const token = sign({}, 'edc038fa909a460a73448bfc5c9af047', {
          subject: createdUser[0].id,
          expiresIn: '1d',
        });
        return token;
      }
    } else if (dados_user.groups.indexOf('AcessosADM') > -1) {
      if (!userAlreadyExists) {
        const createdUser = await this.createUser(matricula);
        const superU = await this.superRepository.findBySuper(5);
        await this.userRepository.update({
          id: createdUser[0].id,
          permission: superU.id,
        });
        const token = sign({}, 'edc038fa909a460a73448bfc5c9af047', {
          subject: createdUser[0].id,
          expiresIn: '1d',
        });
        return token;
      }
    } else {
      throw new AppError('Você não possui acesso a aplicação', 401);
    }
  }
}
export { UserLoginUseCase };
