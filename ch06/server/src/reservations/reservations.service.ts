import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name)
    private reservationModel: Model<Reservation>,
    private mailer: MailerService
  ) {}

  async create(createReservationDto: CreateReservationDto) {
    const res = new this.reservationModel(createReservationDto);
    await res.save();
    await this.mailer.sendMail({
      to: createReservationDto.email,
      subject: 'Booking Confirmed ✔',
      text: `You have booked room
        ${createReservationDto.room} for
        ${createReservationDto.start}
      `
    });
    return { message: 'Booking confirmed!' };
  }

  findAll() {
    return this.reservationModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }

  async findRooms(start: string) {
    const res = await this.reservationModel.findOne({
      start
    });
    return [1, 2, 3].filter(room => room !== res?.room);
  }
}
