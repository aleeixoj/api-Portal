import { Permission } from '../entities/Permission';

interface ICreateUserPermissionDTO {
  user_id: string;
  super_id: string;
}

interface IUserPermissionRepository {
  findById(id: string): Promise<Permission>;
  list(): Promise<Permission[]>;
  create({ user_id, super_id }: ICreateUserPermissionDTO): Promise<void>;
}

export { IUserPermissionRepository, ICreateUserPermissionDTO };
