import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { timestamp } from 'rxjs';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payments.repository';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentRepository: PaymentRepository) {}
  async create(orderId: number, createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.createPayment(orderId, createPaymentDto);
  }

  findAll() {
    return `This action returns all payments`;
  }

  async getPaymentById(id: number) {
    return this.paymentRepository.findPaymentById(id);
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentRepository.updatePayment(id, updatePaymentDto);
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }

  generatingRandomOtp() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
    // console.log(otp);
  }
  // async updatePaymentStatusAfter5Min(paymentId: number) {
  //   const payment = await this.getPaymentById(paymentId);
  //   const createdTime = `${payment.createdOn}`;
  //   console.log('createdTime---', createdTime);
  //   console.log('new Date(createdTime)----', new Date(createdTime + 'Z'));
  //   console.log('Timestamp--1111-', new Date(`${createdTime}`));

  //   const validFor = 300 * 1000;
  //   const currentTime = new Date();
  //   console.log(currentTime);
  //   console.log('Timestamp 22----', currentTime.getTime());

  // const validUpto: number = createdTime + validFor;
  // console.log(validUpto);
  // return currentTime <= validUpto

  // console.log(new Date());
  // console.log(new Date(createdTime));

  // return new Date().getTime() > createdTime + 300000 ? false : true;
  // aise hi

  async updatePaymentStatusAfter5Min(paymentId: number) {
    const payment = await this.getPaymentById(paymentId);
    const createdTime = payment.createdOn;
    console.log(createdTime);
    console.log(createdTime.toISOString());

    console.log(new Date(), typeof new Date());
    console.log(new Date().toISOString());
  }
}
