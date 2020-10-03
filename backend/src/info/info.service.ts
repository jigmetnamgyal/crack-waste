import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoRepository } from './info.repository';
import { CreateInfoLocation } from './dto/createInfo.dto';
@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoRepository) private readonly infoRepo: InfoRepository,
  ) {}


  async createInfo(createInfoDto:CreateInfoLocation):Promise<void>{
      return this.infoRepo.CreateLocation(createInfoDto);
  }
}
