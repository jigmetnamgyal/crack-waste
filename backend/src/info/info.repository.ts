import { Repository, EntityRepository } from "typeorm";
import { Info } from "./info.entity";
import { CreateInfoLocation } from "./dto/createInfo.dto";

@EntityRepository(Info)
export class InfoRepository extends Repository<Info>{
    async CreateLocation(createInfo: CreateInfoLocation){
        const {location, name} = createInfo;

        const info = new Info();
        info.name = name;
        info.location = location;

        await info.save();
    }
}