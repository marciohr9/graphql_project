import {Entity, Column} from 'typeorm';
import {User} from './user';

@Entity({name:"client"})
export class Cliente extends User {
    @Column()
    numberClient!: number;
}