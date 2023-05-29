import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Star from "../assets/pngwing.com.png";

const Device = () => {
  const device = { id: 1, name: "phone1", price: 200, rating: 5 };
  const description = [
    { id: 1, title: "Camera", description: "5mp" },
    { id: 2, title: "Camera", description: "5mp" },
    { id: 3, title: "Camera", description: "5mp" },
    { id: 4, title: "Camera", description: "5mp" },
    { id: 5, title: "Camera", description: "5mp" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <Image
            height={300}
            src="https://via.placeholder.com/300x300"
            alt="zaglushka"
          />
        </Col>
        <Col xs={4}>
          <Row className="d-flex align-items-center justify-content-center">
            <h2 style={{ textAlign: "center" }}>{device.name}</h2>
            <div
              style={{
                background: `url(${Star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
              className="d-flex align-items-center justify-content-center"
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col xs={4}>
          <Card
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
            className="d-flex flex-column align-items-center justify-content-around"
          >
            <h3>{device.price}uah.</h3>
            <Button variant={"outline-dark"}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Characteristics</h2>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Device;
