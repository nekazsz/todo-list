import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const Todolist = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

	const todosElements = todos.map((item) => {

		const { id, ...itemProps } = item

		return (
			<li className='list-group-item' key={ id }>
				<TodoListItem { ...itemProps } onDeleted={ () => onDeleted(id) }
							  onToggleImportant={ () => onToggleImportant(id) }
							  onToggleDone={ () => onToggleDone(id) }/>
			</li>
		);
	});

	return (
		<ul className='list-group todo-list'>
			{ todosElements }
		</ul>
	);
};

export default Todolist;