import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row>
      {device.brands.map((el) => (
        <Col key={el.id}>
          <Card
            style={{ cursor: "pointer" }}
            key={el.id}
            className="p-3"
            border={el.id === device.selectedBrand.id ? "danger" : "light"}
            onClick={() => device.setSelectedBrand(el)}
          >
            {el.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});
export default BrandBar;
