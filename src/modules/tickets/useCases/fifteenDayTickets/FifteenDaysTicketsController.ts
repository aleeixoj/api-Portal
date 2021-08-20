import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FifteenDaysTicketsUseCase } from './FifteenDaysTicketsUseCase';

class FifteenDaysTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const fifteenDaysTicketsUseCase = container.resolve(
      FifteenDaysTicketsUseCase
    );
    const all = await fifteenDaysTicketsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { FifteenDaysTicketsController };
