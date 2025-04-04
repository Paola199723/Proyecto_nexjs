import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CardToken } from '../domain/token.entity';
import { TokenPort } from '../domain/token.port';

@Injectable()
export class TokenAdapter implements TokenPort {
  constructor(private readonly httpService: HttpService) {}

  async createToken(cardData: any): Promise<CardToken> {
    const response = await this.httpService.axiosRef.post(
        'https://api-sandbox.co.uat.wompi.dev/v1/tokens/cards', // <- URL correcta
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
