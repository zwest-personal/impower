import {JSend} from '@src/common/jsend/jsend';

export interface ApiResponse {
    status: 'success' | 'fail' | 'error';
    data?: never;
    message?: string | null;
}

class Response implements JSend {
  // https://github.com/omniti-labs/jsend
  public success(data: never): ApiResponse {
    return {
      status: 'success',
      data,
    };
  }

  public fail(data: never): ApiResponse {
    return {
      status: 'fail',
      data,
    };
  }

  public error(message: string | null, data?: never): ApiResponse {
    return {
      status: 'error',
      message,
      data,
    };
  }
}

export const HTTPResponse = new Response();