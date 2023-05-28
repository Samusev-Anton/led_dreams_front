import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.device.map((el) => (
        <DeviceItem key={el.id} device={el} />
      ))}
    </Row>
  );
});

export default DeviceList;
