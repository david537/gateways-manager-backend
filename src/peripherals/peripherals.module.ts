import { Module } from '@nestjs/common';
import { PeripheralsService } from './peripherals.service';
import { PeripheralsController } from './peripherals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PeripheralsController],
  providers: [PeripheralsService],
  imports: [PrismaModule],
})
export class PeripheralsModule {}
