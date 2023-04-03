import { Injectable } from '@nestjs/common';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeripheralsService {
  constructor(private prisma: PrismaService) {}
  
  create(createPeripheralDto: CreatePeripheralDto) {
    return 'This action adds a new peripheral';
  }

  findAll() {
    return `This action returns all peripherals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peripheral`;
  }

  update(id: number, updatePeripheralDto: UpdatePeripheralDto) {
    return `This action updates a #${id} peripheral`;
  }

  remove(id: number) {
    return `This action removes a #${id} peripheral`;
  }
}
