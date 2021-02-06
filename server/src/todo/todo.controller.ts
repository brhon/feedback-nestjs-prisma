import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    Res,
    HttpStatus,
    Param,
    Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Response } from 'express';

class TodoValidator {
    @IsNotEmpty()
    todo: string;

    @IsNotEmpty()
    author: string;
}

class IDValidator {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get('all')
    async all(): Promise<Todo[] | null> {
        const todo: Todo[] = await this.todoService.getAllTodos();
        return todo;
    }

    @Post('create')
    async create(@Body() data: TodoValidator, @Res() res: Response) {
        const todo = {
            todo: data.todo,
            author: data.author,
        };

        await this.todoService.createNewTodo(todo);
        res.status(HttpStatus.CREATED).json();
    }

    @Post('delete/:id')
    async delete(@Param('id') id: number, @Res() res: Response) {
        await this.todoService.deleteTodo(Number(id));
        res.status(HttpStatus.OK).json();
    }

    @Delete('delete/all')
    async deleteAll(@Res() res: Response) {
        this.todoService.deleteAllTodos();
        res.status(HttpStatus.OK).json();
    }
}
