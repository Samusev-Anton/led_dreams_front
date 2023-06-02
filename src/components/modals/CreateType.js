import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addType } from "../../http/DeviceApi";

const CreateType = ({ show, onHide }) => {
  const [type, setType] = useState("");

  const newType = () => {
    addType({ name: type }).then((data) => setType(""));
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
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            onChange={(e) => setType(e.target.value)}
            value={type}
            placeholder={"Enter new type"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={newType}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
