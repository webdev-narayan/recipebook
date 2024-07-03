import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { database, database_password, database_user } from './config';
import { MorganMiddleware } from './common/middlewares/morgan';
import { PostsModule } from './posts/posts.module';
import { HttpExceptionFilter } from './common/error.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: database,
      type: "postgres",
      username: database_user,
      password: database_password,
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      useClass: HttpExceptionFilter,
      provide: APP_FILTER
    }],

})
// to use global middlewares
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes("*")
  }
}
