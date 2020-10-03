import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoRepository } from './info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InfoRepository])],
  controllers: [InfoController],
  providers: [InfoService]
})
export class InfoModule {}
