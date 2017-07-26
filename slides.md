build-lists: true

# React Dojo / Testing React and Redux

### Wifi (twguest):

begin hark sauce editor sign
#### Hosted by ThoughtWorks / Presented by @cris7ian

#### `git clone https://github.com/tw-react-dojo/4-testing-react-redux`

---

> Working software over comprehensive documentation
- Agile Manifesto.

---

# Red / Green testing

- Write the test.
- Fails (red).
- Write the code.
- Pass (green).

---

# Our Stack

- Jest.
- Enzyme (by Airbnb)

---

# Jest

- Our test runner
- Developed by Facebook.
- Files: `src/**/test.js`
- One test file per file.

---

# Enzyme (http://airbnb.io/enzyme/)

- Static rendering.
- Shallow rendering.
- Full Dom Rendering.

---

# Sinon

- Mocking.
- Spying.

---

# Things to test in our app

- Reducer (reduces what you want to reduce).
- Action Creators (creates the actions you want them to create).
- Components (renders the stuff you want).
- App (everything works together).

---

# Testing Reducers

```js
expect(
  reducer(state, action)
).toEqual(newState)
```

---

# Testing Action Creators

```js
expect(
  actionCreator(payload)
).toEqual(expectedAction)
```

---

# Testing Components

```js
import { shallow } from 'enzyme'

it('allows us to set props', () => {
    const wrapper = shallow(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
  });

```

---

# Testing the App

```js
import { mount } from 'enzyme';

it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <App onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
});
```

---

# Coding Time

---

#[fit] Thank you very much
#[fit] Enjoy the summer
# 😎
