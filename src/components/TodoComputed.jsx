const TodoComputed = (props) => {
    return (
        <section className="flex justify-between py-4 container mx-auto px-4 bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{props.computedItemLeft()} items left </span>
            <button className="text-gray-400" onClick={props.clearCompleted}>clear all checkmarks</button>
        </section>
    )
}

export default TodoComputed;