import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RouteTicketToUserUseCase } from './RouteTicketToUserUseCase';

class RouteTicketToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { rotear } = request.body.data;
    const { array } = request.body;
    const routeTicketToUserUseCase = container.resolve(
      RouteTicketToUserUseCase
    );

    await Promise.all(
      array.map(async (id: string) => {
        await routeTicketToUserUseCase.execute({
          id,
          data: rotear,
        });
      })
    );

    return response.status(201).send();
  }
}

export { RouteTicketToUserController };
