import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <Droppable droppableId="props.todos">
            {(droppableProvided) =>
                <div ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps} className="bg-white rounded-t-md [&>article]:px-4 mt-8">
                    {props.todos.map((todo, index) => (
                        <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                            {(draggableProvided) => (
                                < TodoItem todo={todo}
                                    deleteTodo={props.deleteTodo}
                                    updateTodo={props.updateTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            }
        </Droppable>
    )
}

export default TodoList;