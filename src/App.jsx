import { DragDropContext } from "@hello-pangea/dnd";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { useTranslation } from "react-i18next";



function App() {
  const [t, i18n] = useTranslation("traduccion");
  const initialTodos = [
    { id: 1, title: t("initialTodos.task1"), completed: true },
    { id: 2, title: t("initialTodos.task2"), completed: false },
    { id: 3, title: t("initialTodos.task3"), completed: false },
    { id: 4, title: t("initialTodos.task4"), completed: false },
    { id: 5, title: t("initialTodos.task5"), completed: false },
    { id: 6, title: t("initialTodos.task6"), completed: true },
  ]
  const [todos, setTodos] = useState(initialTodos);
  const [idCounter, setIdCounter] = useState(6);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    const updatedTodos = todos.map(todo => {
      const translationKey = `initialTodos.task${todo.id}`;
      const translatedTitle = t(translationKey);

      return {
        ...todo,
        title: translatedTitle !== translationKey ? translatedTitle : todo.title,
      };
    });
    setTodos(updatedTodos);
  }, [i18n.language]);

  const addTodo = (title) => {
    const newTodo = {
      id: idCounter + 1,
      title,
      completed: false
    };
    setIdCounter(idCounter + 1);
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };

  const computedItemLeft = () => {
    return todos.filter(todo => !todo.completed).length;
  }

  const clearCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  }

  const filterTodos = () => {
    switch (filters) {
      case "all":
        return todos;
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const newTodos = Array.from(todos);  //opcion b    [...todos]
    const [reorderedItem] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, reorderedItem);
    setTodos(newTodos);
  }


  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] sm:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] sm:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-950">
        <Header />

        <main className="container mx-auto px-4 mt-8 max-w-2xl">
          <TodoAdd addTodo={addTodo} />
          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList todos={filterTodos()} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </DragDropContext>
          <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted} />
          <TodoFilter setFilters={setFilters} filters={filters} />
        </main >


        <section className="text-center mt-8 dark:text-gray-400">
          <p>{t("dragAndDrop")}</p>
        </section>
      </div >
    </>
  );
}

export default App;
