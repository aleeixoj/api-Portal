import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SevenDayResetsUseCase } from './SevenDayResetsUseCase';

class SevenDayResetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sevenDayResetsUseCase = container.resolve(SevenDayResetsUseCase);
    const all = await sevenDayResetsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { SevenDayResetsController };
