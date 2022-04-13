import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatus } from './todo.model';

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    description: string;

    @Column({ type: 'enum', enum: TodoStatus, default: TodoStatus.inProgress })
    status: TodoStatus;
}
