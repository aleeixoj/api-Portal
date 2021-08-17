import { getRepository, Repository } from 'typeorm';

import { Resets } from '../../entities/Resets';
import {
  ICloseProps,
  IResetCreateDTO,
  IResetRepository,
} from '../IResetRepository';

class ResetRepository implements IResetRepository {
  private reset: Repository<Resets>;
  constructor() {
    this.reset = getRepository(Resets);
  }
  async findSevenData(): Promise<[Resets[], number]> {
    const sistema = await this.reset.query(
      `SELECT sistema, count(sistema) as quantidade
      FROM public.resets 
      WHERE created > (NOW() - interval '7 days')
      and created < now() 
      group by sistema`
    );

    return sistema;
  }
  async findFifteenData(): Promise<[Resets[], number]> {
    const sistema = await this.reset.query(
      `SELECT sistema, count(sistema) as quantidade
      FROM public.resets 
      WHERE created > (NOW() - interval '15 days')
      and created < now() 
      group by sistema`
    );

    return sistema;
  }
  async findThirtyData(): Promise<[Resets[], number]> {
    const sistema = await this.reset.query(
      `SELECT sistema, count(sistema) as quantidade
      FROM public.resets 
      WHERE created > (NOW() - interval '30 days')
      and created < now() 
      group by sistema`
    );

    return sistema;
  }
  async findByNchamado(nchamado: string): Promise<Resets> {
    const reset = await this.reset.findOne({ nchamado });
    return reset;
  }
  async updateTicket({
    description,
    id,
    iUser,
    arquivo,
  }: ICloseProps): Promise<void> {
    await this.reset.update(id, {
      status: 'Fechado',
      responsavel: iUser,
      desc: description,
      archive: arquivo,
    });
  }
  async updateRespoById(id: string, respo: string): Promise<void> {
    await this.reset.update(id, { responsavel: respo });
  }
  async updateNchamadoById(id: string, nchamado: string): Promise<void> {
    await this.reset.update(id, { nchamado });
  }
  async findById(id: string): Promise<Resets> {
    const reset = await this.reset.findOne({ id });

    return reset;
  }
  async list(): Promise<Resets[]> {
    const resets = await this.reset.find();

    return resets;
  }
  async create({
    requisitante,
    tipo,
    sistema,
    massivo,
    matricula,
    group,
    color,
    archive = 'null',
  }: IResetCreateDTO): Promise<Resets> {
    const resets = this.reset.create({
      color,
      requisitante,
      sistema,
      tipo,
      massivo,
      matricula,
      status: 'Aberto',
      responsavel: 'Não Atribuido',
      group,
      desc: 'Chamado aberto, aguardando o tratamento',
      archive,
    });
    await this.reset.save(resets);
    return resets;
  }
  async findOpenReset(): Promise<Resets[]> {
    const all = await this.reset.find({
      status: 'Aberto',
    });
    return all;
  }
}

export { ResetRepository };
