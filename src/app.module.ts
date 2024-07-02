import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [ConfigModule.forRoot(), CryptoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
