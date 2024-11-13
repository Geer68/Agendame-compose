import { Module } from '@nestjs/common';
import { EntrepreneurshipService } from './entrepreneurship.service';
import { EntrepreneurshipController } from './entrepreneurship.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { entrepreneurshipProvider } from './entrepreneurship.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [EntrepreneurshipController],
  providers: [EntrepreneurshipService, ...entrepreneurshipProvider],
})
export class EntrepreneurshipModule {}
