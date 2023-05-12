import React from "react";
import { Wrapper } from "../style";
import { Title } from "../../../Generic/Style";
import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Types = () => {
  const navigate = useNavigate();
  const navigateHandler = (path) =>
    navigate(`/building-types/ordinary-rooms/${path}`);
  return (
    <>
      <Title>Ordinary Rooms</Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("building/2")}
          image={building}
          title={"2 Building"}
        />
        <Card
          onClick={() => navigateHandler("building/4")}
          image={building}
          title={"4 Building"}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          // onClick={() => navigateHandler("cottages")}
          image={building}
          title={"6 Building"}
        />
      </Wrapper.CardContainer>
    </>
  );
};

const OrdinaryRooms = () => {
  const hasOutlet = useOutlet();
  return <Wrapper>{hasOutlet ? <Outlet /> : <Types />}</Wrapper>;
};

export default OrdinaryRooms;
