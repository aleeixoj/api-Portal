import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTicketUseCase } from './CreateTicketUseCase';

interface IProps {
  requisitante: string;
  tipo: string;
  sistema: string;
  massivo: string;
  matricula: string;
  espelho?: string;
}

class CreateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { requisitante, tipo, sistema, massivo, matricula, espelho }: IProps =
      request.body;
    const arquivo = request.file?.filename;
    const createTicketUseCase = container.resolve(CreateTicketUseCase);
    let mat = matricula;
    if (matricula === undefined) {
      mat = arquivo;
    }
    try {
      const create = await createTicketUseCase.execute({
        requisitante,
        tipo,
        sistema,
        massivo,
        matricula: mat,
        espelho,
      });

      return response.status(201).json({ create });
    } catch (error) {
      return response.json({ status_message: error.message });
    }
  }
}

export { CreateTicketController };
