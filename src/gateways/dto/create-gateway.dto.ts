import { IsString, IsIP } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateGatewayDto {
  @ApiProperty()
  @IsString()
  readonly serial: string;

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsIP('4')
  readonly ip: string;
}
