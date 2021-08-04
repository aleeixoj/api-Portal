import { Systems } from '../entities/Systems';

interface ISystemsCreateDTO {
  label: string;
  value: string;
}

interface ISystemsRepository {
  findById(id: string): Promise<Systems>;
  findByLabel(label: string): Promise<Systems>;
  delSystemByLabel(label: string): Promise<void>;
  list(): Promise<Systems[]>;
  create({ label, value }: ISystemsCreateDTO): Promise<Systems>;
}

export { ISystemsCreateDTO, ISystemsRepository };
