import { Types } from '../entities/Types';

interface ITypesCreateDTO {
  label: string;
  value: string;
}

interface ITypesRepository {
  findById(id: string): Promise<Types>;
  findByLabel(label: string): Promise<Types>;
  delTypeByLabel(label: string): Promise<void>;
  list(): Promise<Types[]>;
  create({ label, value }: ITypesCreateDTO): Promise<Types>;
}

export { ITypesCreateDTO, ITypesRepository };
