import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo'

describe('Testing todo component', () => {
  const mock = jest.fn()
  const todoWrapper = shallow(<Todo onClick={mock} completed text="todo"/>)

  test('The content of the test matches the todo', () => {
    expect(todoWrapper.find('li').text()).toBe('todo')
  })

  test('Onclick is called', () => {
    todoWrapper.simulate('click')
    expect(mock).toBeCalled()
  })
})