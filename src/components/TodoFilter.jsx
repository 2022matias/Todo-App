import { useTranslation } from "react-i18next";

const TodoFilter = (props) => {
    const [t] = useTranslation("traduccion");

    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 bg-white rounded-md pt-4 py-3 dark:bg-gray-800 dark:text-gray-400">
                <button className={`${props.filters === "all" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("all")}>{t("todoFilter.all")}</button>
                <button className={`${props.filters === "active" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("active")}>{t("todoFilter.active")}</button>
                <button className={`${props.filters === "completed" ? "text-blue-600 font-bold" : "hover:text-blue-600"}`} onClick={() => props.setFilters("completed")}>{t("todoFilter.completed")}</button>
            </div>
        </section>
    )
}

export default TodoFilter;