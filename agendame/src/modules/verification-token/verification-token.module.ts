import { Module } from '@nestjs/common';
import { VerificationTokenService } from './verification-token.service';
import { VerificationTokenController } from './verification-token.controller';

@Module({
  controllers: [VerificationTokenController],
  providers: [VerificationTokenService],
})
export class VerificationTokenModule {}
