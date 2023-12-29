import { useState } from 'react';
import { useTranslation } from "react-i18next";

const TodoAdd = (props) => {
    const [t] = useTranslation("traduccion");
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3 bg-white rounded-md py-3 px-4 dark:bg-gray-800">
            <span className="inline-block w-5 h-5 bg-white  rounded-full border-2"></span>
            <input
                type="text"
                placeholder={t("header.add-task")}
                className="w-full outline-none mx-2 dark:bg-gray-800 dark:text-gray-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}

export default TodoAdd;