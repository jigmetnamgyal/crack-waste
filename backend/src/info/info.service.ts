import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoRepository } from './info.repository';
import { CreateInfoLocation } from './dto/createInfo.dto';
import { User } from 'src/auth/user.entity';
@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoRepository) private readonly infoRepo: InfoRepository,
  ) {}


  async createInfo(createInfoDto:CreateInfoLocation, user:User){
      return this.infoRepo.CreateLocation(createInfoDto, user);
  }
}
