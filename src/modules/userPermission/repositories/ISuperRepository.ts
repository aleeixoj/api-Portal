import { Super } from '../entities/Super';

interface ISuperPermissionDTO {
  label: string;
  value: number;
}

interface ISuperPermissionRepository {
  findBySuper(value: number): Promise<Super>;
  findById(id: string): Promise<Super>;
  list(): Promise<Super[]>;
  create({ label, value }: ISuperPermissionDTO): Promise<void>;
}

export { ISuperPermissionRepository, ISuperPermissionDTO };
