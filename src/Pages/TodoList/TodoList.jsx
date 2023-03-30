import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TodoContext } from '../../context/Context';
import {
	ButtonDeleteAll,
	ButtonTodo,
	FormTodo,
	InputTodo,
	SpanDelete,
	TodoContainer,
	TodoItem,
	TodoListContainer,
	TodoListTitle,
} from './TodoListStyle';

const TodoList = () => {
	const [value, setValue] = useState('');
	const ctx = useContext(TodoContext);

	const handleChange = (e) => {
		e.preventDefault();
		ctx.addTodo(value);
		setValue('');
	};

	const { pathName } = useLocation();
	console.log(pathName);
	return (
		<TodoListContainer>
			<TodoListTitle>¿Que carajo tenes que hacer?</TodoListTitle>
			<FormTodo onSubmit={handleChange}>
				<InputTodo
					type="text"
					placeholder="Deci que queres hacer..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<ButtonTodo>Agregar</ButtonTodo>
			</FormTodo>
			<TodoContainer>
				{ctx.todos.map((todo) => (
					<TodoItem key={todo.id}>
						{todo.name}
						<SpanDelete onClick={() => ctx.deleteTodo(todo)}>(x)</SpanDelete>
					</TodoItem>
				))}
			</TodoContainer>
			<ButtonDeleteAll onClick={() => ctx.removeAll()}>
				Borrar todo
			</ButtonDeleteAll>
		</TodoListContainer>
	);
};

export default TodoList;
