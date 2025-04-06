import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MerchantService } from './application/merchant.service';
import { MerchantPort } from './domain/merchant.port';
import { MerchantAdapter } from './infrastructure/merchant.adapter';
import { MerchantController } from './infrastructure/merchant.controller';

@Module({
  imports: [HttpModule],
  controllers: [MerchantController],
  providers: [
    MerchantService,
    MerchantAdapter,
    {
      provide: MerchantPort,
      useClass: MerchantAdapter,
    },
  ],
  exports: [MerchantService],
})
export class MerchantModule {}
