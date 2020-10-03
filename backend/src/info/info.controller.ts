import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoLocation } from './dto/createInfo.dto';

@Controller('info')
export class InfoController {
    constructor(private readonly infoService:InfoService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    createLocation(@Body() createTaskSto:CreateInfoLocation){
        return this.infoService.createInfo(createTaskSto);
    }
}
