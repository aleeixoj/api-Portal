import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ThirtynDaysResetsUseCase } from './ThirtynDaysResetsUseCase';

class ThirtynDaysResetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const thirtynDaysResetsUseCase = container.resolve(
      ThirtynDaysResetsUseCase
    );
    const all = await thirtynDaysResetsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { ThirtynDaysResetsController };
