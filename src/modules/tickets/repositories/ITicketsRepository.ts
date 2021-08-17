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
  findOpenTicket(): Promise<Tickets[]>;
  findById(id: string): Promise<Tickets>;
  findByNchamado(nchamado: string): Promise<Tickets>;
  updateNchamadoById(id: string, nchamado: string): Promise<void>;
  updateRespoById(id: string, respo: string, username: string): Promise<void>;
  list(): Promise<Tickets[]>;
  findAssignedTickets(responsavel: string): Promise<Tickets[]>;
  updateTicket({ description, id, arquivo }: ICloseProps): Promise<void>;
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
  findSevenData(): Promise<[Tickets[], number]>;
  findFifteenData(): Promise<[Tickets[], number]>;
  findThirtyData(): Promise<[Tickets[], number]>;
}

export { ITicketsCreateDTO, ITicketsRepository };
