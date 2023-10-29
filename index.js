/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hi i am in h1</h1>
 *          <h2>Hi i am in h2</h2>
 *      </div>
 * </div>
 *
 *
 */
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "myh1" }, "Hi I am in h1"),
    React.createElement("h2", {}, "Hi I am in h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
