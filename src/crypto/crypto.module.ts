import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [CryptoService],
  controllers: [CryptoController],
})
export class CryptoModule {}
