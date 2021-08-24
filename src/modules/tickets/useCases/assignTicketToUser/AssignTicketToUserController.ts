import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AssignTicketToUserUseCase } from './AssignTicketToUserUseCase';

class AssignTicketToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const { matricula } = request.user;
    const assignTicketToUserUseCase = container.resolve(
      AssignTicketToUserUseCase
    );

    await Promise.all(
      body.map(async (id: string) => {
        await assignTicketToUserUseCase.execute({ id, respo: matricula });
      })
    );

    return response.status(201).send();
  }
}

export { AssignTicketToUserController };
