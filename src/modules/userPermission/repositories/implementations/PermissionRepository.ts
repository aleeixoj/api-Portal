import { getRepository, Repository } from 'typeorm';

import { Permission } from '../../entities/Permission';
import {
  ICreateUserPermissionDTO,
  IUserPermissionRepository,
} from '../IPermissionRepository';

class UserPermissionRepository implements IUserPermissionRepository {
  private permission: Repository<Permission>;
  constructor() {
    this.permission = getRepository(Permission);
  }
  async findById(id: string): Promise<Permission> {
    const permission = await this.permission.findOne({ user_id: id });
    return permission;
  }
  async list(): Promise<Permission[]> {
    const all = await this.permission.find();
    return all;
  }
  async create({ user_id, super_id }: ICreateUserPermissionDTO): Promise<void> {
    const createPermission = this.permission.create({
      super_id,
      user_id,
    });

    await this.permission.save(createPermission);
  }
}

export { UserPermissionRepository };
