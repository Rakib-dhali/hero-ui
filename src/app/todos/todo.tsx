export type Todos = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};
export async function todosData() {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    return data.todos;
}

export const todos: Todos[] =await todosData();