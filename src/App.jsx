import { useState } from 'react';
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

import { useTranslation } from "react-i18next";
const initialTodos = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Learn Tailwind", completed: false },
  { id: 3, title: "Learn Javascript", completed: false },
  { id: 4, title: "Learn HTML", completed: false },
  { id: 5, title: "Learn CSS", completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filters, setFilters] = useState("all");

  const [t, i18n] = useTranslation("traduccion");

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
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


  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] sm:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] sm:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-950">
        <Header />

        <main className="container mx-auto px-4 mt-8 max-w-2xl">
          <TodoAdd addTodo={addTodo} />
          <TodoList todos={filterTodos()} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted} />
          <TodoFilter setFilters={setFilters} filters={filters} />
        </main >


        <section className="text-center mt-8 dark:text-gray-400">
          <p>Drag and drop to reorder list</p>
        </section>
      </div >
    </>
  );
}

export default App;
