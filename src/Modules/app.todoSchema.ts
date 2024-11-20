import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type todoDocument = todo & Document;

@Schema()
export class todo {
  @Prop()
  todoName: string;
  
}

export const CatSchema = SchemaFactory.createForClass(todo);