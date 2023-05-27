import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter basename="/led_dreams_front">
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
