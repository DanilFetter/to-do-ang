import { ApiProperty } from '@nestjs/swagger';
import { TodoStatus } from '../todo.model';

export class ChangeTodoDto {
    @ApiProperty({ enum: [TodoStatus.completed, TodoStatus.inProgress]})
    status: TodoStatus;

    @ApiProperty()
    description: string;
}
