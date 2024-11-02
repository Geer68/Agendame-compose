import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
})
export class AppModule {}
