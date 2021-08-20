import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FifteenDayResetsUseCase } from './FifteenDayResetsUseCase';

class FifteenDaysResetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const fifteenDayResetsUseCase = container.resolve(FifteenDayResetsUseCase);
    const all = await fifteenDayResetsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { FifteenDaysResetsController };
