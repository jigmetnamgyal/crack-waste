import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { User } from 'src/auth/user.entity';

@Entity()
export class Info extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    location:string;

    @ManyToOne(type => User, user => user.info, {eager: false})
    user: User;
}