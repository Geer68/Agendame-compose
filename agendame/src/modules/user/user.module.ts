// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule], // Solo importamos DatabaseModule
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
