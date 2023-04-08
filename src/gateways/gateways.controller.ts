import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayEntity } from './entities/gateway.entity';
import { GatewaysService } from './gateways.service';

@ApiTags('gateways')
@Controller('gateways')
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  @Post()
  @ApiCreatedResponse({ type: GatewayEntity })
  async create(@Body() createGatewayDto: CreateGatewayDto) {
    return new GatewayEntity(await this.gatewaysService.create(createGatewayDto));
  }

  @Get()
  @ApiOkResponse({ type: GatewayEntity, isArray: true })
  async findAll() {
    const gateways = await this.gatewaysService.findAll();
    return gateways.map((gateway) => new GatewayEntity(gateway));
  }

  @Get(':id')
  @ApiOkResponse({ type: GatewayEntity })
  async findOne(@Param('id') id: string) {
    return new GatewayEntity(await this.gatewaysService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: GatewayEntity })
  async update(@Param('id') id: string, @Body() updateGatewayDto: UpdateGatewayDto) {
    return new GatewayEntity(await this.gatewaysService.update(id, updateGatewayDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: GatewayEntity })
  async remove(@Param('id') id: string) {
    return new GatewayEntity(await this.gatewaysService.remove(id));
  }
}
