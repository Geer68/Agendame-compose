// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { userProvider } from './user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProvider],
})
export class UserModule {}
