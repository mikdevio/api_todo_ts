import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import { User } from "./UserEntity.js";
import { Category } from "./CategoryEntity.js";

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

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;

    @ManyToMany(() => Category, category => category.tasks)
    categories: Category[];
}