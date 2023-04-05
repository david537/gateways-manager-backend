import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePeripheralDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  uid: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  vendor: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  gatewayId: string;
}
