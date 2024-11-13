import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/core/database/database.module';
import { AccountModule } from 'src/modules/account/account.module';
import { EntrepreneurshipModule } from 'src/modules/entrepreneurship/entrepreneurship.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    AccountModule,
    EntrepreneurshipModule,
  ],
})
export class AppModule {}
