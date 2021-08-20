import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ThirtynDaysTicketsUseCase } from './ThirtynDaysTicketsUseCase';

class ThirtynDaysTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const thirtynDaysTicketsUseCase = container.resolve(
      ThirtynDaysTicketsUseCase
    );
    const all = await thirtynDaysTicketsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { ThirtynDaysTicketsController };
