# React Intro
## What is React?

- **Declarative Frontend UI Library**: React is a library created by Facebook to make frontend development more straightforward and composable.
## JSX vs. HTML

- JSX is mainly similar to HTML, with some key differences:

  ### Components

  a **component** is a reusable, self-contained chunk of UI that includes  both the markup and  business logic (interactivity).

    ```jsx
    function HelloWorld() {
    const text = 'Is this thing?'
    	return(
    	<> 
    	<h1 className="text-3xl font-bold underline">
        {text}
      </h1>
      </>
      )
    } 
    ```

  ### Syntax Differences

    - Attributes are camelCased and some attribute names have changed `className` instead of `class`.
        - label tags change to `htmlFor` instead `for`
    - Javascript can be written directly into markup  using  `{}` .
    - The `style` attribute uses double curly braces `{{}}` and follows key-value syntax like objects.
        - Inline styling is acceptable but not recommended.
    - Self-closing tags are mandatory if the tag does not have content.

  ### Props

    - **Props**: A way to pass parameters to components.
    - Values can are passed through custom attributes and used inside a child component

      **Example**:

        ```tsx
        
        function Parent() {
            return (
                <>
                    <h1>Props Example</h1>
                    <Child title="incredibly useful!" />
                </>
            );
        }
        
        function Child(props: {title: string}) {
            return (
                <h2>Props are {props.title}</h2>
            );
        }
        ```


    ### Conditional Rendering
    
    - Conditional rendering allows for rendering/displaying different UI elements or components based on conditionals.
    
    ```tsx
    function Greeting(props) {
        const {isLoggedIn} = props
        if (isLoggedIn) {
            return <h1>Welcome back!</h1>;
        }
        
        return <h1>Please sign in.</h1>;
       
    }
    
    // Using a ternary operator
    function Greeting({ isLoggedIn }) {
        return (
            <div>
                {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
            </div>
        );
    }
    
    ```
    
    ### Events
    
    - **Events**: React handles user events similarly to HTML DOM events but with some syntactic differences.
    - Event handlers are camelCased, like all attributes,  and take a function expression as an argument
    
    ```tsx
    function Button() {
        function handleClick() {
            console.log("I was clicked")
        }
    
        return (
            <button onClick={handleClick}>
                Click me
            </button>
        );
    }
    
    ```


### Class Components vs. Functional Components

- **Two Ways to Create Components**:
    - **Class Components**:
        - **Class based components should not be used under any circumstances.**

    ```jsx
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { externalData: []};
        }
    
        componentDidMount() {
           fetch('https://jsonplaceholder.typicode.com/users')
    	       .then(response => response.json())
    	       .then(json => { this.setState({ externalData:json}) })
        }
    
        render() {
            return (
                <div>
                    <h1>{this.props.welcomeMessage}</h1>
                    {this.state.externalData.map((data) => (
                        <h2>{data.username}</h2>
                    ))}
                </div>
            );
        }
    }
    
    ```

    - **Functional Components**:
        - Functional Components became the default way to create components with release of React 16.8,
            - Class base components were deprecated because of nonstandard use of `this` and confusing methods that lead to duplicated logic and unnecessary boilerplate

    ```tsx
    
    import React, { useState, useEffect } from "react";
    
    type Props = {
    	message: string
    
    }
    
    function App(props: Props) {
       const [externalData, setExternalData] = useState([]);
    
      useEffect(() => {
          // Perform actions related to when the component rerender 
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setExternalData(data))  
     
      }, [setExternalData])
    
      return (
        <div>
            <h1>props.message</h1>
            {externalData.map((data: any) => ( 
                <>
                  <h2>{data.title}</h2>
                </>
            ))}
        </div>
    )
    }
    
    ```
## React Hooks

- **React Hooks**: A feature that allows using React state and lifecycle methods in functional components.
- Common hooks include `useState` and `useEffect`.

### useState

- Enables functional components to have state variables.
- Changes to state variables cause components to re-render.

    ```tsx
    const [externalData, setExternalData ] = useState([]);
    ```

    - `externalData`: Accessor for the state variable, returning a read-only value.
    - `setExternalData`: Mutator for the state variable, allowing updates.
    - `useState()`: Makes React aware of the state variable by returning the accessor and mutator in an array.
    - `useState("bar")`: Sets a default value for the state variable.

### useEffect

- Handles side effects occurring outside the component function.

    ```jsx
    useEffect(() => {
    	fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setExternalData(json))  
       
    }, [setExternalData]);
    
    ```

- Syntax: `useEffect(effects, inputs)`
    - `effects`: Anonymous function containing side-effects (e.g., API calls, DOM interaction).
    - `inputs`: Array of values used by effects;
    - Any change to a value in the input array triggers the effect function to run again.

**useEffect is not the same as componentDidMount or componentDidUpdate.**

### Other Important Hooks

- [useRef](https://react.dev/learn/referencing-values-with-refs)
    - useRef is primarily used for DOM manipulation and is the only way you should be using document.getElementById.
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    - `useReducer`  is the primitive that useState is built on.
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
    - A way of using Dependency Injection to avoid having to pass deeply nested prop values
    - Not a replacement for State Management tools like redux.

### Rules of Hooks

1. Only call hooks from functional React components or custom hooks.
2. Do not call hooks in nested functions, loops, or conditionals.