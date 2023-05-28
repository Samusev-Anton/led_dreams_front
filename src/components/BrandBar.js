import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.brands.map((el) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={el.id}
          active={el.id === device.selectedBrand.id}
          onClick={() => device.setSelectedBrand(el)}
        >
          {el.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default BrandBar;
