import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


// export enum Category {
//     ADVENTURE = 'adventure',
//     CLASSICS = 'classics',
//     CRIME = 'crime',
//     FANTASY = 'fantasy',
// }


@Schema({
    timestamps: true
})
export class Todo {

    @Prop()
    userId: number;

    @Prop()
    id: number;

    @Prop()
    value : number;

    @Prop()
    done: boolean;

    // @Prop()
    // category: Category;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);