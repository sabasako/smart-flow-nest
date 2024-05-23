import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GardenModule } from './garden/garden.module';

@Module({
  imports: [AuthModule, GardenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
