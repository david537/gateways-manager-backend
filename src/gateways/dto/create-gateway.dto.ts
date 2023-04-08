import { ApiProperty } from '@nestjs/swagger';
import { IsIP, IsNotEmpty, IsString } from 'class-validator';
export class CreateGatewayDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  serial: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsIP('4')
  @IsNotEmpty()
  @ApiProperty({ description: 'Validate IPv4' })
  ip: string;
}
