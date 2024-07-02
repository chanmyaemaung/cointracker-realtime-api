import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.enableCors();

  const configService = app.get(ConfigService);
  await app.listen(configService.getOrThrow<number>('PORT'));
}
bootstrap();
