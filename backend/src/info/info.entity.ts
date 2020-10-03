import { BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Info extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    location:string;
}