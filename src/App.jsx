//import React from "react";
import { createRoot } from "react-dom/client";

//import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "my-div" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Sheero",
  //     animal: "Dog",
  //     breed: "Pug",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Shadow",
  //     animal: "Dog",
  //     breed: "Poodle",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Parrot",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Sheero" animal="Dog" breed="Pug"></Pet>
      <Pet name="Shadow" animal="Dog" breed="Poodle"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Parrot"></Pet> */}
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
//root.render(React.createElement(App, {}, null));
root.render(<App />);
