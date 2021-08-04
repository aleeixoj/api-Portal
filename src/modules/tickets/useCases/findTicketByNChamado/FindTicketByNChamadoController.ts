import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTicketByNChamadoUseCase } from './FindTicketByNChamadoUseCase';

class FindTicketByNChamadoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findTicketByNChamadoUseCase = container.resolve(
      FindTicketByNChamadoUseCase
    );
    const { nchamado } = request.params;
    try {
      const all = await findTicketByNChamadoUseCase.execute(
        nchamado.toString()
      );
      return response.status(200).json(all);
    } catch (error) {
      return response.json({ status_message: error.message });
    }
  }
}

export { FindTicketByNChamadoController };
