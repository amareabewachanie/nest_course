import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('Http exception handler triggred', JSON.stringify(exception));
    const ctx = host.switchToHttp();
    const response = ctx.getResponse(),
      request = ctx.getRequest(),
      statusCode = exception.getStatus();
    return response.status(statusCode).json({
      status: statusCode,
      createdBy: 'HttpExceptionFilter',
      errorMessage: exception.response.message,
    });
  }
}
