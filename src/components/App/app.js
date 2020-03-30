import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'

import './app.css';

class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  maxId = 100;

  deleteItem = (id) => {
    console.log(id);

    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)        
      ];

      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {

    this.setState(({todoData}) => {
			const newItem = { 
				label: text, 
				important: false, 
				id: this.maxId++ 
			};

			const data = [
				...todoData,
				newItem
			]
			
			console.table(data);

			return {
				todoData: data
			}
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;