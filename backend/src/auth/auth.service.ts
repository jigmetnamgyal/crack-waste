import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async singUp(data: CreateUserDto): Promise<void> {
    return this.userRepo.signUp(data);
  }

  async signIn(data: CreateUserDto):Promise<{accessToken :string}>{
    const username = await this.userRepo.validateUser(data);

    if(!username){
        throw new UnauthorizedException("Invalid Credentials");
    }

    const payload:JwtPayload = {username};
    const accessToken = await this.jwtService.sign(payload);
    return {accessToken};
    
  }
}
