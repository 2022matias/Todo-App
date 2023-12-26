import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:px-4 mt-8">
            {props.todos.map((todo) => (
                < TodoItem key={todo.key} todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} />
            ))}

        </div>
    )
}

export default TodoList;