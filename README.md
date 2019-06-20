# LAB - 29

## React State - Props

### Author: Jesse Van Volkinburg

### Links and Resources

**Assignment 1, Challenge 1**

- [PR - GitHub](https://github.com/401-advanced-javascript-jv/28b-internal-state/pull/1)
- [Travis ![Build Status](https://travis-ci.com/401-advanced-javascript-jv/28b-internal-state.svg?branch=submission)](https://travis-ci.com/401-advanced-javascript-jv/28b-internal-state)
- [Front-End Deployment](https://goofy-archimedes-b548cb.netlify.com/)

**Assignment 1, Challenge 2**

- [PR - GitHub](https://github.com/401-advanced-javascript-jv/28b-internal-state/pull/2)
- [Travis ![Build Status](https://travis-ci.com/401-advanced-javascript-jv/28b-internal-state.svg?branch=submission2)](https://travis-ci.com/401-advanced-javascript-jv/28b-internal-state)
- [Front-End Deployment](https://boring-allen-c14497.netlify.com/)

#### Running the app

- `npm start` - to start the app
- If a browser window does not appear, navigate manually to http://localhost:3000

## Requirements

### Assignment 1 - Props Practice

Begin with: `/lab/starter-code/props`

**Challenge Instructions (Part 1)**

- Complete all tasks in this same index.js file
- Complete the challenge below and submit the URL to your fork
- Create a new component called "Message"
- Render the Message component
- In this componenet, create a state property named "text"
- Set it's value to "Hello World"
- The Message component should render a "div" displaying the contents of the text property from this component's state

**Challenge Instructions (Part 2)**

- Fork your completed sandbox
- Refactor your work using new modules for each component
- Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

- Send multiple properties to the message component
- Create a 3rd component and have the message property render that one, with some props (maybe even the ones that it received)
- Create a 4th component and send props there as well


### Assignment 3 - External State Practice

Begin with: `/lab/starter-code/external-state`

**Challenge Instructions (Part 1)**

- Leave these instructions in place
- Fork this sandbox
- Complete the challenge below and submit the URL to your fork
- Add a constructor and declare a state object
- "state" should have "count" and "name" properties
- Create a "handler" method that will take name as a parameter and updates the state with the given name and an increased count
- Render the "Form" component with a reference to the update method created above, via property
- Create a new "Form" Component
- Add a form element with a single field
- As the user types in the field, change the "name" property in state
- When the user "submits" the form invoke handler method in the parent component, sending the updated name
- The output section below should update as state changes

**Challenge Instructions (Part 2)**

- Fork your completed sandbox
- Refactor your work using new modules for each component
- Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

- Instead of updating the count on submit, create a link that updates the count on demand
- Use multiple fields in your form to update multiple state properties
- Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

### Tests

Write mount/enzyme tests for each component/assignment

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
