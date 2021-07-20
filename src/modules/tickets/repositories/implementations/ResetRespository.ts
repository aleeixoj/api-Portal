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
  async closeTiket({ descr, id, iUser, arquivo }: ICloseProps): Promise<void> {
    await this.reset.update(id, {
      status: 'Fechado',
      responsavel: iUser,
      desc: descr,
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
}

export { ResetRepository };
