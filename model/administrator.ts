import {Column, ChildEntity} from 'typeorm';
import {User} from './user';

@ChildEntity()
export class Administrator extends User {
    @Column()
    adminKey!: number;
}