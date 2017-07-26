import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../reducer'

export const PresentationalAddTodo = ({ addTodo }) => {
  let input
  return (
    <div className="row">
      <form
        className="form-inline"
        onSubmit={e => {
          console.log(input.value)
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value.trim())
          input.value = ''
        }}
      >
        <input
          type="text"
          className="form-control"
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className="btn btn-default">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { addTodo }

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(PresentationalAddTodo)

export default AddTodo
