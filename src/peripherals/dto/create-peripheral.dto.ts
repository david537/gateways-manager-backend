import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class CreatePeripheralDto {
  @ApiProperty()
  @IsInt()
  readonly serial: number;

  @ApiProperty()
  @IsString()
  readonly vendor: string;

  @ApiProperty()
  @IsString()
  readonly status: string;

  @ApiProperty()
  @IsDate()
  readonly createAt: Date;

  @ApiProperty()
  @IsString()
  readonly gatewayId: string;
}
