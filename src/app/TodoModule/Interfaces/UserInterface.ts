import { Todo } from 'src/app/TodoModule/Interfaces/TodoInterface';

export interface User {
    id?: number,
    email?: string,
    username?: string,
    password?: string,
    todos?: Array<Todo>,

}