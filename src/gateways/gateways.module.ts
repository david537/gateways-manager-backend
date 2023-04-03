import { Module } from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { GatewaysController } from './gateways.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GatewaysController],
  providers: [GatewaysService],
  imports: [PrismaModule],
})
export class GatewaysModule {}
