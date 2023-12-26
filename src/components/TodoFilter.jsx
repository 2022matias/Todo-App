const TodoFilter = (props) => {


    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 bg-white rounded-md pt-4 py-3 dark:bg-gray-800">
                <button className={`${props.filters === "all" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("all")}>all</button>
                <button className={`${props.filters === "active" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("active")}>active</button>
                <button className={`${props.filters === "completed" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("completed")}>completed</button>
            </div>
        </section>
    )
}

export default TodoFilter;