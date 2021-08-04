import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTicketsAssignedUseCase } from './FindTicketsAssignedUseCase';

class FindTicketsAssignedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;
    const findTicketsAssignedUseCase = container.resolve(
      FindTicketsAssignedUseCase
    );
    const responsavel = authorization;
    const all = await findTicketsAssignedUseCase.execute(responsavel);

    return response.json(all);
  }
}

export { FindTicketsAssignedController };
