import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
@Catch()
export class FallBackExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(
      'fallback exception filter has been triggered',
      JSON.stringify(exception),
    );
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();
    return response.status(500).json({
      statusCode: 500,
      createdBy: 'FallBackException',
      errorMessage: exception.message
        ? exception.message
        : 'Unexpected error occurred',
    });
  }
}
