declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    result: any;
    user: {
      id?: string;
      matricula?: string;
    };
  }
}
