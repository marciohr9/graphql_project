import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity({name: "user"})
export abstract class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @PrimaryGeneratedColumn("uuid")
    uuid!: string;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @Column()
    phone?: number;
}