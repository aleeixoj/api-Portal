import { inject, injectable } from 'tsyringe';

import { Super } from '../entities/Super';
import { ISuperPermissionRepository } from '../repositories/ISuperRepository';

@injectable()
class ListPermissionsUseCase {
  constructor(
    @inject('SuperRepository')
    private superRepository: ISuperPermissionRepository
  ) {}
  async execute(): Promise<Super[]> {
    const permissions = await this.superRepository.list();
    return permissions;
  }
}

export { ListPermissionsUseCase };
