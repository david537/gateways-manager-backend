import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';

@Injectable()
export class PeripheralsService {
  constructor(private prisma: PrismaService) {}

  create(createPeripheralDto: CreatePeripheralDto) {
    return this.prisma.peripheral.create({ data: createPeripheralDto });
  }

  findAll() {
    return this.prisma.peripheral.findMany();
  }

  findOne(id: string) {
    return this.prisma.peripheral.findUnique({ where: { id } });
  }

  update(id: string, updatePeripheralDto: UpdatePeripheralDto) {
    return this.prisma.peripheral.update({
      where: { id },
      data: updatePeripheralDto,
    });
  }

  remove(id: string) {
    return this.prisma.peripheral.delete({
      where: { id },
    });
  }
}
