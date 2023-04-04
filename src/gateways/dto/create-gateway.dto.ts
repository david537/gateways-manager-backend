import { ApiProperty } from '@nestjs/swagger';
import { IsIP, IsString } from 'class-validator';
export class CreateGatewayDto {
  @ApiProperty()
  @IsString()
  serial: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsIP('4')
  ip: string;
}
