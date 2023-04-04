import { ApiProperty } from '@nestjs/swagger';
import { Peripheral } from '@prisma/client';

export class PeripheralEntity implements Peripheral {
  @ApiProperty()
  id: string;

  @ApiProperty()
  uid: number;

  @ApiProperty()
  vendor: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  status: string;

  @ApiProperty()
  gatewayId: string;
}
