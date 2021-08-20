import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SevenDayTicketsUseCase } from './SevenDayTicketsUseCase';

class SevenDayTicketsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sevenDayTicketsUseCase = container.resolve(SevenDayTicketsUseCase);
    const all = await sevenDayTicketsUseCase.execute();

    return response.status(200).send(JSON.parse(JSON.stringify(all)));
  }
}

export { SevenDayTicketsController };
