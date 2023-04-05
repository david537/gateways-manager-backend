import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';

@Injectable()
export class GatewaysService {
  constructor(private prisma: PrismaService) {}

  create(createGatewayDto: CreateGatewayDto) {
    return this.prisma.gateway.create({ data: createGatewayDto });
  }

  findAll() {
    return this.prisma.gateway.findMany();
  }

  findOne(id: string) {
    return this.prisma.gateway.findUnique({
      where: { id },
      include: {
        peripherals: true
      }
    });
  }

  update(id: string, updateGatewayDto: UpdateGatewayDto) {
    return this.prisma.gateway.update({
      where: { id },
      data: updateGatewayDto
    });
  }

  remove(id: string) {
    return this.prisma.gateway.delete({ where: { id } });
  }
}
