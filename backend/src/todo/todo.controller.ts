import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/CreateTodoDto';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    createTodo(@Body() todo: CreateTodoDto): void {
        return this.todoService.createTodo();
    }
}
