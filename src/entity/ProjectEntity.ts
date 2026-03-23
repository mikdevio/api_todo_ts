import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./UserEntity.js";
import { Task } from "./TaskEntity.js";


@Entity()
export class Project {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'text', default: '#00609C' })
    color: string;

    @Column({
        type: 'enum',
        enum: ['active', 'archived', 'completed', 'canceled'],
        default: 'active'
    })
    status: string;

    @ManyToOne(() => User, user => user.projects)
    user: User;

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @CreateDateColumn()
    createdAt: Date;

}