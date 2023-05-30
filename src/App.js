import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { currentUser } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // if (condition) {

      // }
      currentUser()
        .then((data) => {
          user.setUser(user);
          user.setIsAuth(true);
        })
        .finally(setLoading(false));
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter basename="/led_dreams_front">
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
