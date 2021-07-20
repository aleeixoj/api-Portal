import { Tickets } from '../entities/Tickets';
import { ICloseProps } from './IResetRepository';

interface ITicketsCreateDTO {
  requisitante: string;
  position?: string;
  tipo: string;
  sistema: string;
  massivo: string;
  matricula: string;
  espelho: string;
  archive?: string;
  group?: string;
  color?: string;
  status?: string;
}

interface ITicketsRepository {
  findById(id: string): Promise<Tickets>;
  updateNchamadoById(id: string, nchamado: string): Promise<void>;
  updateRespoById(id: string, respo: string): Promise<void>;
  list(): Promise<Tickets[]>;
  closeTiket({ descr, id, arquivo }: ICloseProps): Promise<void>;
  create({
    requisitante,
    tipo,
    sistema,
    massivo,
    matricula,
    espelho,
    archive,
    group,
    color,
    status,
  }: ITicketsCreateDTO): Promise<Tickets>;
}

export { ITicketsCreateDTO, ITicketsRepository };
