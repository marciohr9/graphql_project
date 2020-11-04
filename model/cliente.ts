import {Column, ChildEntity} from 'typeorm';
import {User} from './user';

@ChildEntity()
export class Cliente extends User {
    @Column()
    numberClient!: number;
}