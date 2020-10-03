import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.comfig';

@Module({
  imports: [InfoModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
