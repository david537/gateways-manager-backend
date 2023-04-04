import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GatewaysService } from './gateways.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GatewayEntity } from './entities/gateway.entity';

@ApiTags('gateways')
@Controller('gateways')
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  @Post()
  @ApiCreatedResponse({ type: GatewayEntity })
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewaysService.create(createGatewayDto);
  }

  @Get()
  @ApiOkResponse({ type: GatewayEntity, isArray: true })
  findAll() {
    return this.gatewaysService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GatewayEntity })
  findOne(@Param('id') id: string) {
    return this.gatewaysService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GatewayEntity })
  update(@Param('id') id: string, @Body() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewaysService.update(id, updateGatewayDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GatewayEntity })
  remove(@Param('id') id: string) {
    return this.gatewaysService.remove(id);
  }
}
