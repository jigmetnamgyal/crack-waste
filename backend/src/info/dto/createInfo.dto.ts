import {IsNotEmpty} from 'class-validator'

export class CreateInfoLocation{
    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    location:string;
}