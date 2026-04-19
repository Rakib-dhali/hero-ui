import { Card } from "@heroui/react";
import { todos, type Todos } from "./todo";
export default function Page() {
    return (
        <div>
            <h1 className="text-center font-bold pt-5">Todos</h1>
            <p className="text-center">This is the todos page.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
            {
                todos.map((todo:Todos ) => {
                    return (
                        <Card key={todo.id} className="col-span-1 bg-gray-200 rounded-lg shadow-md">
                            <Card.Header>
                                <Card.Title>{todo.todo}</Card.Title>
                            </Card.Header>
                            <Card.Footer>{todo.completed? "Completed" : "Not Completed"}</Card.Footer>
                        </Card>
                    );
                })
            }</div>
        </div>
    );
}