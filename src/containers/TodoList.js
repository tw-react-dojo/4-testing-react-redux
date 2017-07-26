import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../reducer'

let TodoList = ({ todos, length, toggleTodo }) => (
  <div className="row">
    <h2>You have to do {length} thing!</h2>
    <ul className="list-group">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          completed={todo.completed}
          onClick={() => toggleTodo(index)}
        />
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  todos: state,
  length: state.length
})

const mapDispatchToProps = { toggleTodo }

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList
