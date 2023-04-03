import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GatewaysModule } from './gateways/gateways.module';
import { PeripheralsModule } from './peripherals/peripherals.module';

@Module({
  imports: [PrismaModule, GatewaysModule, PeripheralsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
