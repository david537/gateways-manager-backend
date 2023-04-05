import { ApiProperty } from '@nestjs/swagger';
import { Gateway } from '@prisma/client';
import { PeripheralEntity } from 'src/peripherals/entities/peripheral.entity';

export class GatewayEntity implements Gateway {
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

  constructor({ peripherals, ...data }: any) {
    Object.assign(this, data);

    if (peripherals) {
      this.peripherals = new PeripheralEntity(peripherals);
    }
  }
}
