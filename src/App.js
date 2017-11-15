import React, { Component } from 'react';
import './App.css';

const list = [
	{
		title: 'React',
		url: 'https://facebook.github.io/react/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://github.com/reactjs/redux',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
];

const person = {
	name: 'Emre',
	surname: 'BELEN',
	age: 26,
	province: 'İzmir',
	pic: 'http://tinyurl.com/y83m7fd3',
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list,
			person,
			searchTerm: '',
		};

		this._onDismiss = this._onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event){
		this.setState({ searchTerm: event.target.value });
	}

	_onDismiss(id) {
		const updatedList = this.state.list.filter(item => item.objectID !== id);
		this.setState({ list: updatedList });
	}

	render() {
		return (
			<div className="App">
				<form>
					Text to search:
					<input type="text"
						onChange={this.onSearchChange}
					/>
				</form>
				{ this.state.list.filter(item => item.title.includes(this.state.searchTerm)).map(item =>
					<div key={item.objectID}>
						<span>
							<a href={item.url}>{item.title}</a>
						</span>
						<span>{item.author}</span>
						<span>{item.num_comments}</span>
						<span>{item.points}</span>
						<span>
							<button 
								onClick={() => this._onDismiss(item.objectID)} 
								type="button">
								Dismiss
							</button>
						</span>
					</div>
				)
				}
				<div>
					<span><img alt={this.state.person.name} src={this.state.person.pic} height="42" width="42"/>    </span>
					<span>{this.state.person.name} </span>
					<span>{this.state.person.surname} </span>
					<span>{this.state.person.age} </span>
					<span>{this.state.person.province} </span>
				</div>
			</div>
		);
	}
}

export default App;
