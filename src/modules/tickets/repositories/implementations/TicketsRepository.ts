import { getRepository, Repository } from 'typeorm';

import { Tickets } from '../../entities/Tickets';
import { ICloseProps } from '../IResetRepository';
import { ITicketsCreateDTO, ITicketsRepository } from '../ITicketsRepository';

class TicketsRepository implements ITicketsRepository {
  private ticket: Repository<Tickets>;
  constructor() {
    this.ticket = getRepository(Tickets);
  }
  async findByNchamado(nchamado: string): Promise<Tickets> {
    const ticket = await this.ticket.findOne({ nchamado });
    return ticket;
  }
  async findOpenTicket(): Promise<Tickets[]> {
    const all = await this.ticket.find({
      status: 'Aberto',
      responsavel: 'Não atribuido',
    });
    return all;
  }
  async findAssignedTickets(responsavel: string): Promise<Tickets[]> {
    const all = await this.ticket.find({ responsavel });
    return all;
  }
  async updateRespoById(
    id: string,
    respo: string,
    username: string
  ): Promise<void> {
    await this.ticket.update(id, {
      responsavel: respo,
      desc: `Chamado atribuido ao assistente ${username}`,
    });
  }
  async updateTicket({
    description,
    id,
    arquivo,
    status,
  }: ICloseProps): Promise<void> {
    await this.ticket.update(id, {
      status,
      desc: description,
      archive: arquivo,
    });
  }
  async updateNchamadoById(id: string, nchamado: string): Promise<void> {
    await this.ticket.update(id, { nchamado });
  }
  async findById(id: string): Promise<Tickets> {
    const ticket = await this.ticket.findOne({ id });

    return ticket;
  }
  async list(): Promise<Tickets[]> {
    const tickets = await this.ticket.find();

    return tickets;
  }
  async create({
    requisitante,
    group,
    color,
    tipo,
    sistema,
    massivo,
    matricula,
    espelho,
  }: ITicketsCreateDTO): Promise<Tickets> {
    const tickets = this.ticket.create({
      requisitante,
      responsavel: 'Não atribuido',
      color,
      tipo,
      sistema,
      massivo,
      group,
      matricula,
      espelho,
      status: 'Aberto',
      desc: 'Chamado aberto, aguardando tratamento',
    });
    await this.ticket.save(tickets);
    return tickets;
  }
}

export { TicketsRepository };
