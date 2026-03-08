import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    description: string;


    @Column({type:"boolean", default: false})
    completed: boolean;

    @CreateDateColumn()
    createdAt: Date;

}