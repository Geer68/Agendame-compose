import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Exportamos para que esté disponible en otros módulos
})
export class DatabaseModule {}
