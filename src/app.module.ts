import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    CardModule,
    MongooseModule.forRoot(
      'mongodb+srv://user:Password01@cluster0.if1zt.mongodb.net/subtest?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
