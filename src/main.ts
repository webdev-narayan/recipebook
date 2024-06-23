import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api")
  await app.listen(port);
  console.log(`app running on -> http://localhost:${port}`)
}
bootstrap();
