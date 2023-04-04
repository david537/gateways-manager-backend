import { ApiProperty } from '@nestjs/swagger';
import { Gateway } from '@prisma/client';

export class GatewayEntity implements Gateway {
  @ApiProperty()
  id: string;

  @ApiProperty()
  serial: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  ip: string;
}
