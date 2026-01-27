import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Reservation,
  ReservationSchema
} from './entities/reservation.entity';
import { AiService } from './ai/ai.service';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService, AiService],
  imports: [MongooseModule.forFeature([
    { name: Reservation.name, schema: ReservationSchema }
  ])]
})
export class ReservationsModule {}
