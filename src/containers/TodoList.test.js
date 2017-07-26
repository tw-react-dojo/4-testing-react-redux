import React from 'react'
import { mount } from 'enzyme'
import TodoList, { PresentationalTodoList } from './TodoList'

import { Provider } from 'react-redux'
import { reducer } from '../reducer'
import { createStore, compose } from 'redux'

describe('Presentation', () => {
  test('Populates the list', () => {
    const todos = [
      {text: 'todo 2', completed: false},
      {text: 'todo 2', completed: false}
    ]
    const todosWrapper = mount(<PresentationalTodoList todos={todos} length={1}/>)
    expect(todosWrapper.find('Todo').length).toBe(2)
  })

  test('Clicks the toggle', () => {
    const todos = [
      {text: 'todo 2', completed: false},
      {text: 'todo 2', completed: false}
    ]
    const toggleTodoMock = jest.fn()
    const todosWrapper = mount(<PresentationalTodoList
      todos={todos}
      toggleTodo={toggleTodoMock}
      length={1}
    />)
    todosWrapper.find('Todo').first().simulate('click')
    expect(toggleTodoMock).toBeCalledWith(0);
  })
})

describe('Connected', () =>  {
  test('todos are represented', () => {
    const store = createStore(reducer)
    const connectedTodosWrapper = mount(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    )
    expect(connectedTodosWrapper.find('Todo').length).toBe(1)
  })
})
