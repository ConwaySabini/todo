// Database calls are all made through the services
// Easier to measure database response time through service design

import { Todo, TodoModel } from './todo.model';
import { nanoid } from 'nanoid';
import { CreateTodoBody } from './todo.schema';

// todo type input
export async function createTodo(input: CreateTodoBody): Promise<Todo> {
  const shortId = `todo_${nanoid()}`;

  return TodoModel.create({
    shortId,
    ...input,
  });
}
