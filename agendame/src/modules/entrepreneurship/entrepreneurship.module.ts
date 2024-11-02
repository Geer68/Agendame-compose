import { Module } from '@nestjs/common';
import { EntrepreneurshipService } from './entrepreneurship.service';
import { EntrepreneurshipController } from './entrepreneurship.controller';

@Module({
  controllers: [EntrepreneurshipController],
  providers: [EntrepreneurshipService],
})
export class EntrepreneurshipModule {}
