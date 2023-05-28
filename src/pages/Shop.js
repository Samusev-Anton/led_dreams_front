import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

const Shop = () => {
  return (
    <Container>
      <BrandBar />
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
};

export default Shop;
