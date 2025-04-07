import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PaymentService } from './application/payments.service';
import { PaymentsPort } from './domain/payments.port';
import { PaymentsAdapter } from './infrastructure/payments.adapter';
import { PaymentsController } from './infrastructure/payments.controller';

@Module({
  imports: [HttpModule],
  controllers: [PaymentsController],
  providers: [
    PaymentService,
    PaymentsAdapter,
    {
      provide: PaymentsPort,
      useClass: PaymentsAdapter,
    },
  ],
  exports: [PaymentService],
})
export class PaymentstModule {}
