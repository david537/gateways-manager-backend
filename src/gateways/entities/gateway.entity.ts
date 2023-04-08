import { ApiProperty } from '@nestjs/swagger';
import { Gateway } from '@prisma/client';
import { PeripheralEntity } from 'src/peripherals/entities/peripheral.entity';

export class GatewayEntity implements Gateway {
  constructor(partial: Partial<PeripheralEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  serial: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  ip: string;

  @ApiProperty({ required: false, type: PeripheralEntity })
  peripherals: PeripheralEntity;
}
