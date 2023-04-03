import { Injectable } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GatewaysService {
  constructor(private prisma: PrismaService) {}

  create(createGatewayDto: CreateGatewayDto) {
    return 'This action adds a new gateway';
  }

  findAll() {
    return `This action returns all gateways`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gateway`;
  }

  update(id: number, updateGatewayDto: UpdateGatewayDto) {
    return `This action updates a #${id} gateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} gateway`;
  }
}