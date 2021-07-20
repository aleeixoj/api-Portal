import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CloseTicketsUseCase } from './CloseTicketsUseCase';

class CloseTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, descr } = request.body;
    // const { descr } = request.body.data;
    const { user } = request.headers;
    const arquivo = request.file?.filename;
    const closeTicketsUseCase = container.resolve(CloseTicketsUseCase);
    try {
      await closeTicketsUseCase.execute({ id, descr, user, arquivo });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { CloseTicketsController };
