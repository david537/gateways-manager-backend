import { Injectable } from '@nestjs/common';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
      data: this.update,
    });
  }

  remove(id: string) {
    return this.prisma.peripheral.delete({
      where: { id },
    });
  }
}
