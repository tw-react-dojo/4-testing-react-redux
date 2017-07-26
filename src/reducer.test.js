import { reducer, addTodo, toggleTodo } from './reducer'

describe('Action creators', () => {
  test('Adding a todo', () => {
    expect(addTodo('todo')).toEqual({
      type: 'ADD_TODO',
      text: 'todo'
    })
  })

  test('Toggling a todo', () => {
    expect(toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      index: 1
    })
  })
})

describe('Reducer', () => {
  test('adding a todo', () => {
    const expectedFinalState = [{ text: 'todo', completed: false }]

    expect(reducer([], { type: 'ADD_TODO', text: 'todo' })).toEqual(
      expectedFinalState
    )
  })

  test('toggling a todo', () => {
    const initialState = [{ text: 'todo', completed: false }]
    const expectedFinalState = [{ text: 'todo', completed: true }]

    expect(reducer(initialState, { type: 'TOGGLE_TODO', index: 0 })).toEqual(
      expectedFinalState
    )
  })
})
