import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Category } from './CategoryEntity.js';
import { Project } from './ProjectEntity.js';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('text')
  title!: string;

  @Column('text')
  description!: string;

  @Column({ type: 'boolean', default: false })
  completed!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToMany(() => Category, (category) => category.tasks, { eager: true })
  categories!: Category[];

  @ManyToOne(() => Project, (project) => project.tasks, { eager: true })
  project!: Project;
}
