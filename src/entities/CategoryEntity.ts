import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./TaskEntity.js";


@Entity()
export class Category {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(() => Task, task => task.categories)
    @JoinTable()
    tasks: Task[];
}