import { Controller, Get, Post, Body } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  isFeatureEnabled() {
    return this.statusService.isFeatureEnabled();
  }

  @Post()
  toggleFeature(@Body() status: { status: boolean }) {
    this.statusService.toggleFeature(status);
    return { message: 'Status toggled saccesfuly', status };
  }
}
