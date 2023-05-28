import React from "react";
import { Card, Col } from "react-bootstrap";
import { HiOutlineStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/const";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col xs={3}>
      <Card
        style={{ width: 150, cursor: "pointer" }}
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
        className="mt-4"
      >
        <div style={{ height: 150 }}>img</div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4>{device.name}</h4>
          <div className="d-flex align-items-center">
            <h4>{device.rating}</h4>
            <HiOutlineStar style={{ width: 25, height: 25 }} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
