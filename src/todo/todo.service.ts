import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Todo } from './schemas/todo.schema';


@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ) {
        
    }

    async findAll(): Promise<Todo[]>{
    const todos = await this.todoModel.find();
    return todos;
    }

    async create(todo: Todo): Promise<Todo>{
        const res = await this.todoModel.create(todo);
        return res;
    }

    async findById(id: number): Promise<Todo>{
        const todo = await this.todoModel.findById(id);

        if(!todo){
            throw new NotFoundException('Book not found');
        }
        return todo;
    }

    async upadateById(id: number, todo: Todo): Promise<Todo>{
        return await this.todoModel.findByIdAndUpdate(id, todo, {
            new: true,
            runValidators: true,
        });

    }
}
