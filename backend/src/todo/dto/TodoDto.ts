import { ApiProperty } from '@nestjs/swagger';
import { TodoStatus } from '../todo.model';

export class TodoDto {
    @ApiProperty()
    id: string;

    @ApiProperty({ enum: [TodoStatus.completed, TodoStatus.inProgress]})
    status: TodoStatus;

    @ApiProperty()
    description: string;
}
