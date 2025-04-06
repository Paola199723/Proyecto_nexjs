import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TokenService } from '../payments/application/token.service';
import { TokenPort } from '../payments/domain/token.port';
import { TokenAdapter } from '../payments/infrastructure/token.adapter';
import { TokenController } from '../payments/infrastructure/token.controller';

@Module({
  imports: [HttpModule],
  controllers: [TokenController],
  providers: [
    TokenService,
    {
      provide: TokenPort,
      useClass: TokenAdapter,
    },
  ],
})
export class TransactionsModule {}
