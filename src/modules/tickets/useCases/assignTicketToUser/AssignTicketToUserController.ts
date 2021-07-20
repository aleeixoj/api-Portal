import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AssignTicketToUserUseCase } from './AssignTicketToUserUseCase';

class AssignTicketToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    const { respo } = request.headers;
    const assignTicketToUserUseCase = container.resolve(
      AssignTicketToUserUseCase
    );

    try {
      await Promise.all(
        data.map(async (id: string) => {
          await assignTicketToUserUseCase.execute({ id, respo });
        })
      );

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { AssignTicketToUserController };
