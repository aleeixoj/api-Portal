import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AssignTicketToUserUseCase } from './AssignTicketToUserUseCase';

class AssignTicketToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const { authorization } = request.headers;
    const assignTicketToUserUseCase = container.resolve(
      AssignTicketToUserUseCase
    );

    try {
      await Promise.all(
        body.map(async (id: string) => {
          await assignTicketToUserUseCase.execute({ id, respo: authorization });
        })
      );

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ status_message: error.message });
    }
  }
}

export { AssignTicketToUserController };
