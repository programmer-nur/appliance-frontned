export interface IMeta {
    limit: number;
    page: number;
    total: number;
  }
  
  export interface ResponseSuccessData {
    data: any;
    meta?: IMeta;
  }
  
  export interface IGenericErrorResponse {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  }
  
  export interface IGenericErrorMessage {
    path: string | number;
    message: string;
  }





