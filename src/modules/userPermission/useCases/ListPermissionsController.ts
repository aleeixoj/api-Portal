import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPermissionsUseCase } from './ListPermissionsUseCase';

class ListPermissionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPermissionsUseCase = container.resolve(ListPermissionsUseCase);
    const all = await listPermissionsUseCase.execute();

    return response.json(all);
  }
}

export { ListPermissionsController };
