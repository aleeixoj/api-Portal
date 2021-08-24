import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTicketUseCase } from './UpdateTicketUseCase';

class UpdateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { status, description, id } = request.body;
    // const { descr } = request.body.data;
    const { matricula } = request.user;
    const arquivo = request.file?.filename;
    const updateTicketUseCase = container.resolve(UpdateTicketUseCase);
    await updateTicketUseCase.execute({
      status,
      user: matricula,
      arquivo,
      description,
      id,
    });

    return response.status(200).send();
  }
}

export { UpdateTicketController };
