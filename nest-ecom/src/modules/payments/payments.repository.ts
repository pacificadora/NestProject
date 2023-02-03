/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersService } from '../orders/orders.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentRepository {
  constructor(
    @InjectRepository(Payment) private paymentModel: Repository<Payment>,
    private readonly orderService: OrdersService
  ) {}

  async createPayment(id: number, createPaymentDto: CreatePaymentDto) {
    const payment: Payment = new Payment();
    payment.paymentComplete = createPaymentDto.paymentComplete;
    payment.order = await this.orderService.getOrdersByOrderId(id);
    return this.paymentModel.create(payment);
  }

  async findAllPayments(): Promise<Payment[]> {
    return this.paymentModel.find();
  }

  async findPaymentById(id: number): Promise<Payment> {
    return this.paymentModel.findOne({ where: { id: id } });
  }

  async findByOrderId(orderId: number): Promise<Payment[]> {
    const payment = this.paymentModel.find({
      relations: ['order'],
      where: { id: orderId },
    });
    if (payment) {
      return payment;
    }
  }

  //return all the payemnts which are completed.
  async findByCompleted(): Promise<Payment[]> {
    const payment = this.paymentModel.find({
      where: { paymentComplete: true },
    });
    if (payment) {
      return payment;
    }
  }

  //return all the payemnts which are not completed.
  async findByNotCompleted(): Promise<Payment[]> {
    const payment = this.paymentModel.find({
      where: { paymentComplete: false },
    });
    if (payment) {
      return payment;
    }
  }

  //update
  async updatePayment(
    id: number,
    updatePaymentDto: UpdatePaymentDto,
  ){ //: Promise<Payment> 
    const payment: Payment = new Payment();
    payment.paymentComplete = updatePaymentDto.paymentComplete;
    payment.createdBy = updatePaymentDto.createdBy;
    payment.updatedBy = updatePaymentDto.updatedBy;
    const temp =  this.paymentModel.update(id, payment);
    console.log('temp---', temp)
  }
}
