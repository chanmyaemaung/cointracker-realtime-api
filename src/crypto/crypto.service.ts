import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class CryptoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getAssets(): Observable<any> {
    return this.httpService.get(
      this.configService.getOrThrow<string>('COINCAP_API_URL'),
    );
  }
}
