import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' }
	]

	render() {

		const { filter, onChangeFilter } = this.props

		const buttons = this.buttons.map(({ name, label }) => {
			const isActive = filter === name;
			const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button type='button'
						className={ `btn ${ btnClass }` } key={ name }
						onClick={ () => onChangeFilter(name) }>{ label }
				</button>
			)
		})

		return (
			<div className='btn-group'>
				{ buttons }
			</div>
		);
	};
};