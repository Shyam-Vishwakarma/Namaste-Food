React.createElement -> JS Object -> Rendered as HTML element
const heading = React.createElement(
"h1",
{ id: "heading", xyz: "abc" },
"Namaste React"
);

JSX(Transpiled befor reaching JS Engine) -> Parcel -> Babel
JSX -> React.createElement -> JS Object -> Rendered as HTML element
const jsxHeading = (

  <h1 id="heading" className="heading">
    Namaste React in JSX
  </h1>
);

React components
Class based (OLD)
Functional components

const HeadingComponent = () => {
return <h1>Namaste react Functional component</h1>;
};

to render <HeadingComponent/> -> babel understand

using keys(best) >>>>>>>>>>>>>>>>>>>> index as key >>>>>>> not using key

# useState() -

- used to create local state variable inside a component
- never use it in condition - if else, loops, functions
- Gives super variable or state variable
- returns one variable and a fn to manipulate the variable

# useEffect(callBackFN, dependencyArray) -

- if no dependencyArray useEffect will be called every time component renders
- if dependencyArray is empty [] -> useEffect will be called only at initial render [one time]
- if dependencyArray is [btnName] -> useEffect will be called when btnName changes
- to do something after rendering the component
- takes a callback fn which triggers after rendering the component

- Whenever state variable updates - react re render the components

- Reconcialation Algorithm - React buffer
- Diff algo

# How we render data recieved from API ?

- Page loads -> API call -> render : There will be nothing on the page untill api responds
- Page loads -> Render whatever we have (skeleton) -> API call -> render => Better UX

# React router dom (nom i react-router-dom)

write routing configuration in app.js

- 2 types of routing - Client side routing, Server side routing
- never use <a> tag to go to different rout in react because it refreshes whole page
  const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />,
  children: [
  {
  path: "/",
  element: <Body />,
  },
  {
  path: "/about",
  element: <About />,
  },
  {
  path: "/contact",
  element: <ContactUS />,
  },
  ],
  },
  ]);

React life cycle :
Mounting phase : Render(Constructor, Render dom) + Commit(Component did mount)

Parent constructor
Parent render

First child constructor
First child render
Second child constructor
Second child render

- (DOM UPDATED - IN SINGLE BATCHES)
  First child did mount
  Second child did mount

- Single responsibilty principle

# lazy loading

- https://react.dev/reference/react/lazy
- Chunking
- Code splitting
- Dynamic Bundling
- lazy loading
- Dynamic import
- Dynamic loading

- SASS, SCSS
- Styled components
  https://styled-components.com/
- Material ui - MUI
- bootstrap
- chakraUi
- ant design

// Higher order components -> takes component as input and return a component

// managing state
Redux, zustand
redux -
easy debugging
manage state

Vanilla reduc - old way of writing redux -
Complicated, Include lot of packages to work, need more boilerplate code

RTK (redux toolkit)

react-redux

# how redux works behind

When [ADD] is clicked :
Redux Store is a big JavaScrip object which is devided in different sections called as slices or redux store is partitioned on the basis of uses.

[ADD] -> dispatches an [ACTION] -> [REDUCER] fn do the changes in respective slice

How we get data from redux store ?
When we click on cart, it SUBSCRIBED to the cart slice(store) via [selector] and access the data and cart is updated

# redux toolkit

- install @reduxjs/toolkit and react-redux
- build our store
- Slice(carSlice)
- connect app with store
- dispatch(action)
- selector

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
