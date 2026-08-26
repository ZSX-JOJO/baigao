import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * 全局异常过滤器：统一错误结构（statusCode/message/timestamp/path）+ 日志打点。
 * 仅接管未被业务层捕获的异常与 HttpException（含 Guard 抛出的 401/403），
 * 不改动业务层 200 + ResponseInfoDto.status 的既有响应契约。
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const isHttp = exception instanceof HttpException;
    const status = isHttp
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    let detail: string | object = isHttp
      ? exception.getResponse()
      : 'Internal server error';

    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    if (typeof detail === 'string') {
      detail = { message: detail };
    }

    response.status(status).json({
      ...(typeof detail === 'object' ? detail : { message: detail }),
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
