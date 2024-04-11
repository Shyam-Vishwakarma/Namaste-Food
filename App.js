const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Namaste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
