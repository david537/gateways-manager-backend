import { Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GatewaysService {
  constructor(private prisma: PrismaService) {}

  create(createGatewayDto: CreateGatewayDto) {
    return this.prisma.gateway.create({ data: createGatewayDto });
    return 'This action adds a new gateway';
  }

  findAll() {
    return this.prisma.gateway.findMany();
    return `This action returns all gateways`;
  }

  findOne(id: string) {
    return this.prisma.gateway.findUnique({ where: { id } });
    return `This action returns a #${id} gateway`;
  }

  update(id: string, updateGatewayDto: UpdateGatewayDto) {
    return this.prisma.gateway.update({
      where: { id },
      data: this.update,
    });
    return `This action updates a #${id} gateway`;
  }

  remove(id: string) {
    return this.prisma.gateway.delete({ where: { id } });
    return `This action removes a #${id} gateway`;
  }
}
