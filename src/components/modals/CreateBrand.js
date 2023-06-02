import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addBrand } from "../../http/DeviceApi";

const CreateBrand = ({ show, onHide }) => {
  const [brand, setBrand] = useState("");

  const newBrand = () => {
    addBrand({ name: brand }).then((data) => setBrand(""));
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            onChange={(e) => setBrand(e.target.value)}
            placeholder={"Enter new brand"}
            value={brand}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={newBrand}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
