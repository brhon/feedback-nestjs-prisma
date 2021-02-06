import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) {}

    async getAllTodos(): Promise<Todo[] | null> {
        const todos = await this.prisma.todo.findMany();
        return todos;
    }

    async createNewTodo(todo: Prisma.TodoCreateInput) {
        return await this.prisma.todo.create({
            data: {
                todo: todo.todo,
                author: todo.author,
            },
        });
    }

    async deleteTodo(id: number) {
        return this.prisma.todo.delete({
            where: {
                id: id,
            },
        });
    }

    async deleteAllTodos() {
        return this.prisma.todo.deleteMany();
    }
}
