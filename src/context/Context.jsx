import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [isDark, setIsDark] = useState(false);

	const addTodo = (value) => {
		!value.trim().length
			? alert('no pusiste ninguna tarea culeado')
			: todos.some((todo) => todo.name === value)
			? alert('ya ingresaste esa tarea pendejo')
			: setTodos([...todos, { name: value, id: Date.now() }]);
	};

	const deleteTodo = (todo) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	const removeAll = () => {
		setTodos([]);
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				deleteTodo,
				removeAll,
				isDark,
				setIsDark,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
