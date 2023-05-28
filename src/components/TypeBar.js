import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((el) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={el.id}
          active={el.id === device.selectedTypes.id}
          onClick={() => device.setSelectedTypes(el)}
        >
          {el.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default TypeBar;
