# code modularity
Modularity is the practice of dividing your code into smaller, independent, and cohesive units that perform specific tasks or functions. These units are often called modules, components, or classes, depending on the programming language and paradigm you use. Modularity allows you to organize your code logically, avoid repetition, and facilitate testing and debugging.
- divide code into smaller component, one component should not exceed the 100-200 lines of code.
- put all you hardcoded data into seperate file.

# folder structure
Always try to follow industry standard folder structure
- e.g: https://legacy.reactjs.org/docs/faq-structure.html

# export
- default export
    - export default **functionname**
- named export (when we need to export multiple functions/objects from file)
    - export **function/object name** / export {objects, functions}

# eventHandler
Used to handle events in browsers e.g: click, hover, inputchange, etc

**traditional event handler**: event handlers are attached to DOM elements directly. This can be done using HTML attributes, or by using JavaScript to attach the event handlers.
```javascript
// html e.g
<button onclick="handleClick()">Click Me</button>

<script>
  function handleClick() {
    alert('Button clicked!');
  }
</script>
// js e.g
<button id="myButton">Click Me</button>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>
<button id="myButton">Click Me</button>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>
```

**react event handler**: Uses a synthetic event system that wraps the native events for cross-browser compatibility and additional features.
```javascript
import React from 'react';

class App extends React.Component {
  handleClick = (event) => {
    // Access synthetic event properties
    console.log(event.type); // click
    console.log(event.target); // the button element
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default App;
```


# React hooks
Hooks are simple utility function that let you use state and other React features in functional components. They were introduced in React 16.8 to enable state management and side effects in functional components, which were previously only possible in class components. Here are some of the most commonly used hooks:

## Rules to use hooks in react
- Hooks are subject to a few important rules and conditions that ensure they work correctly.
- Only Call Hooks at the Top Level
```javascript
   // Correct
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');
}

// Incorrect
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0);
  }
  const [name, setName] = useState('Alice');
}
```
- Only Call Hooks from React Functions
```js
// Correct
function MyComponent() {
  const [count, setCount] = useState(0);
}

function useCustomHook() {
  const [value, setValue] = useState('Hello');
}

// Incorrect
function notAComponent() {
  const [count, setCount] = useState(0);
}
```

### Some common hooks
- `useState`: This hook allows you to add state to functional components.
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

# Reconciliation
Reconciliation in React refers to the process of updating the DOM to match the current state of the application. React uses a diffing algorithm to efficiently compare the new virtual DOM tree with the previous one and apply only the necessary updates to the real DOM. This process ensures that the UI remains performant and responsive even with frequent updates.

Reconciliation process in React:

- **Virtual DOM Representation**: React maintains a lightweight, in-memory representation of the real DOM known as the virtual DOM. Each time the state of a component changes, React creates a new virtual DOM tree.
- **Diffing Algorithm**: React uses a diffing algorithm to compare the new virtual DOM with the previous one. This algorithm is optimized to handle updates efficiently by making several assumptions:
Two elements of different types will produce different trees: When the root elements have different types, React will tear down the old tree and build a new one from scratch.
Minimal operations: React tries to minimize the number of operations needed to update the real DOM by only updating the changed parts.


