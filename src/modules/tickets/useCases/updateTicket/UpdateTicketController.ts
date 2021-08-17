import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTicketUseCase } from './UpdateTicketUseCase';

class UpdateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { status, description, id } = request.body;
    // const { descr } = request.body.data;
    const { authorization } = request.headers;
    const arquivo = request.file?.filename;
    const updateTicketUseCase = container.resolve(UpdateTicketUseCase);
    try {
      await updateTicketUseCase.execute({
        status,
        user: authorization,
        arquivo,
        description,
        id,
      });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { UpdateTicketController };
