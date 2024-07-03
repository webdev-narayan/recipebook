import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './config';
// import { ResponseTransformInterceptor } from './interceptor/response-transformer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api")
  // app.useGlobalInterceptors(new ResponseTransformInterceptor())
  await app.listen(port);
  console.log(`app running on -> http://localhost:${port}`)
}
bootstrap();
