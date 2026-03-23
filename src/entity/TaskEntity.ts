import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import { Category } from "./CategoryEntity.js";
import { Project } from "./ProjectEntity.js";

@Entity()
export class Task {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    description: string;

    @Column({ type: "boolean", default: false })
    completed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    // @ManyToOne(() => User, (user) => user.tasks)
    // user: User;

    @ManyToMany(() => Category, category => category.tasks)
    categories: Category[];

    @ManyToOne(() => Project, project => project.tasks)
    project: Project;

}