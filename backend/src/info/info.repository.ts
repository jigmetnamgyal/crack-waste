import { Repository, EntityRepository } from 'typeorm';
import { Info } from './info.entity';
import { CreateInfoLocation } from './dto/createInfo.dto';
import { User } from 'src/auth/user.entity';

@EntityRepository(Info)
export class InfoRepository extends Repository<Info> {
  async CreateLocation(createInfo: CreateInfoLocation, user: User) {
    const { location, name } = createInfo;

    const info = new Info();
    info.name = name;
    info.location = location;
    info.user = user;
    await info.save();

    delete info.user;

    return info;
  }
}
