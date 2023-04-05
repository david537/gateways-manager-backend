import { ApiProperty } from '@nestjs/swagger';
import { Peripheral } from '@prisma/client';

export class PeripheralEntity implements Peripheral {
  constructor(partial: Partial<PeripheralEntity>) {
    Object.assign(this, partial);
  }
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
