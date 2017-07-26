import React, { Component } from 'react'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App
