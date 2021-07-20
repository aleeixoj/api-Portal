import { Super } from '../entities/Super';

interface ISuperPermissionDTO {
  name: string;
  superNumber: number;
}

interface ISuperPermissionRepository {
  findBySuper(superNumber: number): Promise<Super>;
  list(): Promise<Super[]>;
  create({ name, superNumber }: ISuperPermissionDTO): Promise<void>;
}

export { ISuperPermissionRepository, ISuperPermissionDTO };
