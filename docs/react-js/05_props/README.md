## Docs.dev - Props, Data flow & `children`

### What are props?
*Props are used to pass data from parent to child components.*<br/>
When it comes to render identical component with different data.

```jsx
import React from "react";

function Greet() {
    return <h2>Hello, world</h2>
}

function App() {
    return (
        <>
            <Greet />
            <Greet />
        </>
    )
}

export default App;
```
In the above code block the `<Greet />` component is rendering twice, but the content is the same.

**Do you know?**<br/>
You can manipulate the content of any component using props. 🤓

Lets understand with an example.
```jsx
import React from "react";

function Greet(props) {
    return <h2>Hello, {props.value}</h2>
}

function App() {
    return (
        <>
            <Greet value="world!" />
            <Greet value="react" />
        </>
    )
}

export default App;
```

#### How to pass props?
You can pass props as `attribute` alike HTML into a component.
```jsx
function App() {
    return (
        <>
            <Greet value="world!" />
            <Greet value="react" />
        </>
    )
}
```
And access the prop data within the component using `props` parameter.<br/>
Inside component defintion.
```jsx
function Greet(props) {
    return <h2>Hello, {props.value}</h2>
}
```

#### Multiple props
You can also pass multiple props in a component.
```jsx
function User(props) {
    return <h3>I'm, {props.name}. A passionated {props.role}</h3>
}

function App() {
    return (
        <>
            <User name="ninja" role="frontend-developer" />
            <User name="john" role="backend-developer" />
        </>
    )
}
```

### Props Destructuring
You have learned that how to pass `props`.

Many of time you will have to pass more than one props.<br/>
Now, You are thinking about what is the big deal.

Data can be passed like this.
```jsx
function App() {
    return (
        <User
            name="ninja"
            role="frontend-developer"
            expertize="react"
            location="jamshedpur"
            email="ninjacoder07@gmail.com"
        />
    )
}
```
Have a look on accessing the data.
```jsx
function User(props) {
    return (
        <>
            <h3>I'm {props.name} and I am a {props.role}.</h3>
            <h4>I've expertize in {props.expertize} based in {props.location}.</h4>
            <h5>Book a meeting on {props.email}.</h5>
        </>
    )
}
```

Here is a solution to avoid writing props multiple times.

`props` → is an `Object`<br/>
Lets destruct it
```jsx
function User({ name, role, expertize, location, email }) {
    return (
        <h3>
            <h3>I'm {name} and I am a {role}.</h3>
            <h4>I've expertize in {expertize} based in {location}.</h4>
            <h5>Book a meeting on {email}.</h5>
        </h3>
    )
}
```

### Concise way of props passing

You can follow a best pratice of data passing as an `Object`

```jsx
function App() {
    return (
        <User
            userData={{
                name: "ninja",
                role: "frontend-developer",
                expertize: "react",
                location: "jamshedpur",
                contact: "ninjacoder07@gmail.com"
            }}
        />
    )
}
```

Extracting values from an `Object`
```jsx
function User({ userData }) {
    const { name, role, expertize, location, contact } = userData;
    return (
        <h3>
            I'm {name} and I am a {role}.
            I have expertize in {expertize} based in {location}.
            Book a meeting on {contact}.
        </h3>
    )
}
```

### Data Flow & Prop Drilling
![data flow](./data-flow.png)

> [!IMPORTANT]\
> Data flows from top level component to nested level components.\
> `Parent` → `Children` → `GrandChild` → `...`

*Prop Drilling* is a concept of passing data to one component to other.

You need to understand the data flow structure of your app.

```jsx
function App() {
    return (
        <>
            <Container name="ninja" />
        </>
    )
}
```
```jsx
// container component
function Container({name}) {
    return (
        <Greet name={name} />
    )
}

// greet component
function Greet({name}) {
    return (
        <User name={name} />
    )
}

// user component
function User({name}) {
    return <h3>{name}</h3>
}
```

### Children Rendering 😎
We have learned that how can we pass props to child component.

*But the component is not limited with only props passing.*<br/>
Instead we can pass an entire component.

Lets see how can we achieve it.
```jsx
import React from "react";

function App() {
    return <h1>Docs.dev</h1>
}

export default App;
```
An another component as `<Container />`
```jsx
function Container() {
    return (
        <>

        </>
    )
}
```
Render it in `<App />`
```jsx
function App() {
    return (
        <Container />
    )
}
```
Instead of self closing tag. We can write the component name as traditional HTML tag.<br/>
```jsx
function App() {
    return (
        <Container></Container>
    )
}
```
And inside the tag we can write `JSX` code. 🤓
```jsx
function App() {
    return (
        <Container>
            <h2>Docs.dev - React</h2>
        </Container>
    )
}
```
This inner `JSX` known as `children` props and can be accessible using `children` keyword.
```jsx
function Container({ children }){
    return (
        <>
            {children}
        </>
    )
}
```
**Amazing!** 😍