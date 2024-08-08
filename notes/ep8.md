# react class component

- Older way to write component in react
- it uses es6 class systax
- need to import Component from React.Component
- PROPS & STATE:
  - passing props from one to another same as html attribute
  - receiving from props from another component inside the constructor
  - it is mandatory use super() inside the constructor as it access to **this** keyword with constructor
  - we can define out state inside the constructor itself
  - to update state use **this.setState()**

# React life-cycle

There are 3 phases of React life cycle: - Mounting - constructor and render() method called in this phase - Updating - componentDidMount() and componentDidUpdate() methods are getting called in this phase - all api calls happens in componentDidMount() method as it render after the first render of component - componentDidUpdate() use to udapte the the state - Unmounting - componentWillUnmount() method called to clear up and prevent memory leakage

### life-cycle process:

    - 2 phases:
        - rendering:
            - this first time when component mouting in the ui
        - commit phase:
            - this happens when componentDidMount called
            - react tried to batch all the componentDidMount() calls in single batch to update the DOM as DOM manupulation is expensive in JS.
    - constructor => render() method => componentDidMount() => componentDidUnmount() => componentWillUnmount()
