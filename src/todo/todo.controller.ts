import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDTO } from './dto/create-todo.dto';
// import { UpdateTodoDTO } from './dto/update-todo.dto';
import { todo } from 'node:test';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get()
    async getAllTodos(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Post()
    async createTodo(
        @Body()
        todo: CreateTodoDTO,
    ): Promise<Todo> {
        return this.todoService.create(todo)
    }

    @Get(':id')
    async getTodo(
        @Param('id')
        id: number,
    ): Promise<Todo> {
        return this.todoService.findById(id);
    }

    @Post(':id')
    async updateTodo(
        @Param('id')
        id: number,
        @Body()
        todo: CreateTodoDTO,
    ): Promise<Todo> {
        return this.todoService.upadateById(id, todo)
    }

}
