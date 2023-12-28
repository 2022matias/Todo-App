import { useTranslation } from "react-i18next";

const TodoComputed = (props) => {
    const { t } = useTranslation("traduccion");
    return (
        <section className="flex justify-between py-4 container mx-auto px-4 bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{props.computedItemLeft()} {t("todoComputed.itemsLeft")}</span>
            <button className="text-gray-400" onClick={props.clearCompleted}>{t("todoComputed.clearCheckmarks")}</button>
        </section>
    )
}

export default TodoComputed;