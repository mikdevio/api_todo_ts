import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Task } from "./TaskEntity.js";
import { Project } from "./ProjectEntity.js";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("text")
    firstName: string;

    @Column("text")
    lastName: string;

    @Column("text")
    address: string;

    @Column("text")
    email: string;

    @Column({ type: "boolean", default: false })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    // @OneToMany(() => Task, (task) => task.user)
    // tasks: Task[]

    @OneToMany(() => Project, project => project.user)
    projects: Project[];

}