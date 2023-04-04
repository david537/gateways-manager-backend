import { Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return this.prisma.gateway.findUnique({ where: { id } });
  }

  update(id: string, updateGatewayDto: UpdateGatewayDto) {
    return this.prisma.gateway.update({
      where: { id },
      data: this.update,
    });
  }

  remove(id: string) {
    return this.prisma.gateway.delete({ where: { id } });
  }
}
