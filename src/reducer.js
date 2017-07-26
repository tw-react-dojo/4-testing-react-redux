const initialState = [{ text: 'buy milk!', completed: false }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
      )
    default:
      return state
  }
}

const addTodo = text => ({
  type: 'ADD_TODO',
  text // text: text
})

const toggleTodo = index => ({
  type: 'TOGGLE_TODO',
  index
})

export { reducer, addTodo, toggleTodo }
