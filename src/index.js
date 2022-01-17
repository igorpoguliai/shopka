import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Root from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
