import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString } from 'class-validator';

export class CreatePeripheralDto {
  @ApiProperty()
  @IsInt()
  uid: number;

  @ApiProperty()
  @IsString()
  vendor: string;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  gatewayId: string;
}
