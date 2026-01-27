import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

const connection = {
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
};

@Module({
  imports: [
    ReservationsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/studio'),
    MailerModule.forRoot({ transport: connection }),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
