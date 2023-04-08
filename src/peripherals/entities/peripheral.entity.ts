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

  @ApiProperty({ required: false, nullable: true })
  gatewayId: string | null;

  @ApiProperty({ required: false, type: PeripheralEntity })
  gateway?: PeripheralEntity | null;

  constructor({ gateway: any, ...data }: Partial<any>) {
    Object.assign(this, data);

    if (this.gateway) {
      this.gateway = new PeripheralEntity(this.gateway);
    }
  }
}
