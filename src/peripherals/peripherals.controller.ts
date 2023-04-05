import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';
import { PeripheralEntity } from './entities/peripheral.entity';
import { PeripheralsService } from './peripherals.service';

@ApiTags('peripherals')
@Controller('peripherals')
export class PeripheralsController {
  constructor(private readonly peripheralsService: PeripheralsService) {}

  @Post()
  @ApiCreatedResponse({ type: PeripheralEntity })
  async create(@Body() createPeripheralDto: CreatePeripheralDto) {
    return new PeripheralEntity(await this.peripheralsService.create(createPeripheralDto));
  }

  @Get()
  @ApiOkResponse({ type: PeripheralEntity, isArray: true })
  async findAll() {
    const peripherals = await this.peripheralsService.findAll();
    return peripherals.map((peripheral) => new PeripheralEntity(peripheral));
  }

  @Get(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  async findOne(@Param('id') id: string) {
    return new PeripheralEntity(await this.peripheralsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  async update(@Param('id') id: string, @Body() updatePeripheralDto: UpdatePeripheralDto) {
    return new PeripheralEntity(await this.peripheralsService.update(id, updatePeripheralDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  async remove(@Param('id') id: string) {
    return new PeripheralEntity(await this.peripheralsService.remove(id));
  }
}
