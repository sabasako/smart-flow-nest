// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [AuthModule, DataModule, StatusModule],
})
export class AppModule {}
