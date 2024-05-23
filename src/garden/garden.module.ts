import { Module } from '@nestjs/common';
import { GardenService } from './garden.service';
import { GardenController } from './garden.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [GardenService, JwtAuthGuard],
  controllers: [GardenController],
})
export class GardenModule {}
