import React from "react";
import CollectionForm from "./components/CollectionForm";
import CollectionList from "./components/CollectionList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Cash Collection App</h1>
      <CollectionForm />
      <CollectionList />
    </div>
  );
}

export default App;
