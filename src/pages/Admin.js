import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-3">
        Add type
      </Button>
      <Button variant={"outline-dark"} className="mt-4 p-3">
        Add brand
      </Button>
      <Button variant={"outline-dark"} className="mt-4 p-3">
        Add device
      </Button>
      <CreateDevice />
      <CreateType show={true} />
      <CreateBrand />
    </Container>
  );
};

export default Admin;
