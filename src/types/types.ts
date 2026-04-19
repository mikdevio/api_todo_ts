// types.ts

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export type CreateTaskDto = Omit<Task, 'id' | 'createdAt' | 'completed'>;
