import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, BaseEntity, TableInheritance} from 'typeorm';

@Entity({name: "user"})
@TableInheritance({ column: {type: 'varchar', name:'type'}})
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