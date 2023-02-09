import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { PaymentRepository } from './payments.repository';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), OrdersModule],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentRepository],
  exports: [PaymentsService],
})
export class PaymentsModule {}
