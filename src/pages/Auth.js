import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";

const Auth = () => {
  const location = useLocation();
  const isLogIn = location.pathname === LOGIN_ROUTE;
  console.log(location);
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
          ></Form.Control>
          <Form.Control
            placeholder="Enter your password"
            className="mt-3 "
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
            >
              {isLogIn ? "Enter" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
