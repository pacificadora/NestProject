import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
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

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentRepository.updatePayment(id, updatePaymentDto);
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
