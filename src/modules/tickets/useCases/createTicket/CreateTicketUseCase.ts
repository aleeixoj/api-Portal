import { inject, injectable } from 'tsyringe';

import { transporter } from '../../../../config/nodemailer';
import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { IResetRepository } from '../../repositories/IResetRepository';
import { ITicketsRepository } from '../../repositories/ITicketsRepository';

interface IRequest {
  requisitante: string;
  tipo: string;
  sistema: string;
  massivo: string;
  matricula: string;
  espelho?: string;
  archive?: string;
}

interface ISendMail {
  emailSend: string;
  nchamado: string;
}
@injectable()
class CreateTicketUseCase {
  constructor(
    @inject('TicketsRepository')
    private ticketRepository: ITicketsRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('ResetRepository')
    private resetRepository: IResetRepository
  ) {}

  private async sendEmail({ emailSend, nchamado }: ISendMail) {
    await transporter.sendMail({
      from: 'Portal Acessos <portal.eq.acessos.br@telefonica.com>',
      to: emailSend,
      subject: nchamado,
      html: `Chamado ${nchamado} aberto`,
    });
  }

  async execute({
    requisitante,
    tipo,
    sistema,
    massivo,
    matricula,
    espelho,
  }: IRequest): Promise<string> {
    if (
      tipo === '' ||
      sistema === '' ||
      massivo === '' ||
      matricula === '' ||
      espelho === ''
    ) {
      throw new AppError('É necessario completar o checklist');
    }
    if (tipo === 'Reset') {
      const user = await this.userRepository.findByMat(requisitante);
      const create = await this.resetRepository.create({
        requisitante,
        tipo,
        sistema,
        massivo,
        matricula,
        color: user.color,
        group: user.group,
      });
      if (!create) {
        throw new AppError('Ocorreu um erro ao criar o chamado');
      }
      const resetTicket = await this.resetRepository.findById(create.id);
      const parse = `00000000${resetTicket.position}`.slice(-8);

      const nchamado = `RST${parse}`;
      await this.resetRepository.updateNchamadoById(create.id, nchamado);
      // await this.sendEmail({ emailSend: user.email, nchamado });
      return nchamado;
    }
    const user = await this.userRepository.findByMat(requisitante);
    const create = await this.ticketRepository.create({
      requisitante,
      tipo,
      sistema,
      massivo,
      matricula,
      espelho,
      group: user.group,
      color: user.color,
    });
    if (!create) {
      throw new AppError('Ocorreu um erro ao criar o chamado');
    }
    const ticket = await this.ticketRepository.findById(create.id);
    const parse = `00000000${ticket.position}`.slice(-8);

    const nchamado = `ACC${parse}`;
    await this.ticketRepository.updateNchamadoById(create.id, nchamado);
    return nchamado;
  }
}

export { CreateTicketUseCase };
