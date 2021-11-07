import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Oauth2Module } from './oauth2/oauth2.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(), Oauth2Module,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) { }
}
