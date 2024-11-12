import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserModule } from 'src/modules/user/user.module';
// import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UserModule],
})
export class AppModule {}
