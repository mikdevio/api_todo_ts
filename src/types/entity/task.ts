import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    description: string;


    @Column("boolean")
    completed: boolean;

    @Column("date")
    createdAt: Date;

}