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
