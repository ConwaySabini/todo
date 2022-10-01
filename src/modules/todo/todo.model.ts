import { getModelForClass, prop } from '@typegoose/typegoose';

// Typegoose class

export class Todo {
  @prop({
    type: String,
    required: true,
  })
  title: string;
  @prop({
    type: String,
    required: true,
  })
  shortId: string;
  @prop({
    type: String,
    default: false,
  })
  isComplete: boolean;
}

export const TodoModel = getModelForClass(Todo, {
  schemaOptions: {
    timestamps: true,
  },
});
