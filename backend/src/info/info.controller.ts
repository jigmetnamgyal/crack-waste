import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoLocation } from './dto/createInfo.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('info')
@UseGuards(AuthGuard())
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createLocation(
    @Body() createTaskSto: CreateInfoLocation,
    @GetUser() user: User,
  ) {
    return this.infoService.createInfo(createTaskSto, user);
  }
}
