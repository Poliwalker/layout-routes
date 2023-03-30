import styled from 'styled-components';

export const TodoListContainer = styled.div`
	width: 50%;
	height: auto;
	margin: 0 auto;
	max-width: 1300px;
	border: 1px solid blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 650px;
`;

export const TodoListTitle = styled.h2`
	margin-bottom: 20px;
`;

export const FormTodo = styled.form``;

export const InputTodo = styled.input`
	height: 42px;
	border: 1px solid #ffffff;
	background-color: transparent;
	color: var(--color);
	border-radius: 10px 0 0 10px;
	&:focus {
		outline: none;
	}
`;

export const ButtonTodo = styled.button`
	padding: 11px;
	border: none;
	background-color: var(--color-sec);
	color: var(--color);
	font-weight: 700;
	border-radius: 0 10px 10px 0;
`;

export const TodoContainer = styled.div`
	overflow: hidden;
`;

export const TodoItem = styled.p`
	width: 230px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const SpanDelete = styled.span``;

export const ButtonDeleteAll = styled.button``;
