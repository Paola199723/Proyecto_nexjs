import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CardToken } from '../domain/token.entity';
import { TokenPort } from '../domain/token.port';
@Injectable()
export class TokenAdapter implements TokenPort {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async createToken(cardData: any): Promise<CardToken> {
    const tokenUrl = this.configService.get<string>('SANDBOX_TOKEN_URL');
    
    const response = await this.httpService.axiosRef.post(
        tokenUrl, // <- URL correcta
        cardData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer pub_stagtest_g2u0HQd3ZMh05hsSgTS2lUV8t3s4mOt7', // <- API key pública
        },
      }
    );
    return response.data; // ajusta esto si usas una entidad CardToken como clase
  }
}
