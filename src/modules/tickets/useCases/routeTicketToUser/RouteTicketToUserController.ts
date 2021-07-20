import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RouteTicketToUserUseCase } from './RouteTicketToUserUseCase';

class RouteTicketToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    const { array } = request.body;
    const { respo } = request.headers;
    const routeTicketToUserUseCase = container.resolve(
      RouteTicketToUserUseCase
    );
    try {
      await Promise.all(
        array.map(async (id: string) => {
          await routeTicketToUserUseCase.execute({ id, respo, data });
        })
      );

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ status_message: error.message });
    }
  }
}

export { RouteTicketToUserController };
