import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ISuperPermissionRepository } from '../../../userPermission/repositories/ISuperRepository';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  id: string;
  permission: number;
}
@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('SuperRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  async execute({ id, permission }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findById(id);

    if (!userAlreadyExists) {
      throw new AppError('User not exists!');
    }

    const superU = await this.superRepository.findBySuper(permission);
    await this.userRepository.update({
      id,
      permission: superU.id,
    });
  }
}

export { UpdateUserUseCase };
