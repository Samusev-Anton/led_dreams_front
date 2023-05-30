import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getBrands, getDevices, getTypes } from "../http/DeviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    getTypes().then((data) => device.setType(data));
    getBrands().then((brands) => device.setBrands(brands));
    getDevices().then((dev) => device.setDevice(dev.rows));
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col xs={3}>
          <TypeBar />
        </Col>
        <Col xs={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
