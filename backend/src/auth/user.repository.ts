import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(createUserDto: CreateUserDto): Promise<void> {
    const { username, password } = createUserDto;

    const user = new User();
    user.salt = await bcrypt.genSalt();
    user.username = username;
    user.password = await this.hashing(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(
          `the username: ${user.username} is already taken`,
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  private async hashing(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
