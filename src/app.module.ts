import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://rianperigo:rianperigo@cluster0.vv9jges.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
