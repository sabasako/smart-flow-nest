import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { GardenService } from './garden.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('garden')
export class GardenController {
  constructor(private readonly gardenService: GardenService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getGarden(@Param('id') id: string) {
    const garden = this.gardenService.getGardenById(Number(id));
    if (garden) {
      return { data: { garden } };
    }
    return { error: 'Garden not found' };
  }

  @UseGuards(JwtAuthGuard)
  @Post('hw/garden-status')
  updateGardenStatus(@Body() body: { ec: number; gardenId: number }) {
    return this.gardenService.updateGardenStatus(body.gardenId, body.ec);
  }
}
