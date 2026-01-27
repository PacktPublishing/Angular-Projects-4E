import {
  Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';

@Schema()
export class Reservation {
  @Prop()
  name: string;
  
  @Prop()
  start: string;
  
  @Prop()
  room: number;
  
  @Prop()
  email: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
