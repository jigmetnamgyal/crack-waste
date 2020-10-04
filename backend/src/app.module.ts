import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.comfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InfoModule, TypeOrmModule.forRoot(typeormConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
