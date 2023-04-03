import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeripheralsService } from './peripherals.service';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('peripherals')

@Controller('peripherals')
export class PeripheralsController {
  constructor(private readonly peripheralsService: PeripheralsService) {}

  @Post()
  create(@Body() createPeripheralDto: CreatePeripheralDto) {
    return this.peripheralsService.create(createPeripheralDto);
  }

  @Get()
  findAll() {
    return this.peripheralsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peripheralsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeripheralDto: UpdatePeripheralDto) {
    return this.peripheralsService.update(+id, updatePeripheralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peripheralsService.remove(+id);
  }
}
