import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService:AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) data:CreateUserDto):Promise<void>{
        return this.userService.singUp(data);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) data:CreateUserDto){
        return this.userService.signIn(data);
    }

}
