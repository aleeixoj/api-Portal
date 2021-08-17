import { Resets } from '../entities/Resets';

interface IResetCreateDTO {
  requisitante: string;
  position?: string;
  tipo: string;
  sistema: string;
  massivo: string;
  matricula: string;
  archive?: string;
  group?: string;
  color?: string;
  status?: string;
}

interface ICloseProps {
  id: string;
  iUser?: string;
  description: string;
  arquivo?: string;
  status?: string;
}

interface IResetRepository {
  findById(id: string): Promise<Resets>;
  findByNchamado(nchamado: string): Promise<Resets>;
  updateNchamadoById(id: string, nchamado: string): Promise<void>;
  updateRespoById(id: string, respo: string): Promise<void>;
  list(): Promise<Resets[]>;
  updateTicket({ description, id, iUser, arquivo }: ICloseProps): Promise<void>;
  create({
    requisitante,
    tipo,
    sistema,
    massivo,
    matricula,
    archive,
    group,
    color,
    status,
  }: IResetCreateDTO): Promise<Resets>;
  findOpenReset(): Promise<Resets[]>;
  findSevenData(): Promise<[Resets[], number]>;
  findFifteenData(): Promise<[Resets[], number]>;
  findThirtyData(): Promise<[Resets[], number]>;
}

export { IResetCreateDTO, IResetRepository, ICloseProps };
