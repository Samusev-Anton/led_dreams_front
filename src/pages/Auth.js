import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/const";
import { logIn, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogIn = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authClick = async () => {
    let data;
    try {
      if (isLogIn) {
        data = await logIn(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);

      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 800 }} className="p-3">
        <h2 className="m-auto">{isLogIn ? "Autorize" : "Register"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="Enter your email"
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            placeholder="Enter your password"
            className="mt-3 "
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Row className="d-flex mt-3 px-3" style={{ display: "flex" }}>
            {isLogIn ? (
              <div>
                Don't have account?
                <NavLink to={REGISTRATION_ROUTE}>Please register</NavLink>
              </div>
            ) : (
              <div>
                You have account?
                <NavLink to={LOGIN_ROUTE}>Please enter</NavLink>
              </div>
            )}
            <Button
              className="w-25 align-self-center"
              variant={"outline-success"}
              // type="submit"
              onClick={authClick}
            >
              {isLogIn ? "Enter" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
