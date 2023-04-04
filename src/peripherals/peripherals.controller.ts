import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  create(@Body() createPeripheralDto: CreatePeripheralDto) {
    return this.peripheralsService.create(createPeripheralDto);
  }

  @Get()
  @ApiOkResponse({ type: PeripheralEntity, isArray: true })
  findAll() {
    return this.peripheralsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  findOne(@Param('id') id: string) {
    return this.peripheralsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  update(
    @Param('id') id: string,
    @Body() updatePeripheralDto: UpdatePeripheralDto,
  ) {
    return this.peripheralsService.update(id, updatePeripheralDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PeripheralEntity })
  remove(@Param('id') id: string) {
    return this.peripheralsService.remove(id);
  }
}
