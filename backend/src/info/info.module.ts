import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoRepository } from './info.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([InfoRepository]), AuthModule],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
