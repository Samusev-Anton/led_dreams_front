import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col xs={3}>
          <TypeBar />
        </Col>
        <Col xs={9}>
          <BrandBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
