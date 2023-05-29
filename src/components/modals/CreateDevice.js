import React, { useContext, useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((el) => number !== el.number));
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
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>Chooze type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Chooze brend</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Enter the name of device"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            placeholder="Enter the price  of device"
            type="number"
          ></Form.Control>
          <Form.Control className="mt-3" type="file"></Form.Control>
          <Button onClick={addInfo} className="mt-3" variant={"outline-dark"}>
            add a new characteristic
          </Button>
          {info.map((el) => (
            <Row key={el.number}>
              <Col className="mt-3">
                <Form.Control placeholder="Enter a tiile"></Form.Control>
              </Col>
              <Col className="mt-3">
                <Form.Control placeholder="Enter a description"></Form.Control>
              </Col>
              <Col>
                <Button
                  onClick={() => removeInfo(el.number)}
                  className="mt-3"
                  variant={"outline-danger"}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
