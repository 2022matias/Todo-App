import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = (props) => {
    const { id, title, completed } = props.todo;

    return (
        <article className="flex py-4 gap-3 border-b border-b-gray-400 dark:bg-gray-800">
            {completed
                ? <button className="inline-block w-5 h-5 bg-white  rounded-full border-2" onClick={() => props.updateTodo(id)}><IconCheck className="pl-0.5" /></button>
                : <button className="inline-block w-5 h-5 bg-white  rounded-full border-2" onClick={() => props.updateTodo(id)}></button>}
            <p className={`${completed ? "text-gray-600 dark:text-gray-300 grow line-through" : "text-gray-600 grow"}`}>{title}</p>
            <button className="" onClick={() => props.deleteTodo(id)}><CrossIcon /></button>
        </article>
    )
}

export default TodoItem;