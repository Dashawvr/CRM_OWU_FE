export interface CustomError {
  status: number;
  error: {
    message: string
    code: number
  };
}
