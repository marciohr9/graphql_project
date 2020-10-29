import {Entity, Column} from 'typeorm';
import {User} from './user';

@Entity({name:"admin"})
export class Administrator extends User {
    @Column()
    adminKey!: number;
}