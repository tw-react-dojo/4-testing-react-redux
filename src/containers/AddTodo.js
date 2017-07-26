import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../reducer'

let AddTodo = ({ addTodo }) => {
  let input
  return (
    <div className="row">
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value.trim())
          input.value = ''
        }}
      >
        <input
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

const mapStateToProps = () => {}

const mapDispatchToProps = { addTodo }

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo
