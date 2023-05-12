import { Wrapper } from "./style";
import { Title } from "../../Generic/Style";
import Card from "../../Generic/Card";
import luxury_room from "../../assets/images/luxury_room.svg";
import ordinary_room from "../../assets/images/ordinary_room.svg";
import mansion from "../../assets/images/mansion.svg";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Types = () => {
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(`/building-types/${path}`);
  return (
    <>
      <Title>BuildingTypes:</Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("ordinary-rooms")}
          image={ordinary_room}
          title={"Ordinary Rooms"}
        />
        <Card
          onClick={() => navigateHandler("luxury-rooms")}
          image={luxury_room}
          title={"Luxury Rooms"}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("cottages")}
          image={mansion}
          title={"Cottages"}
        />
      </Wrapper.CardContainer>
    </>
  );
};

const BuildingTypes = () => {
  const hasOutlet = useOutlet();

  return <Wrapper>{hasOutlet ? <Outlet /> : <Types />}</Wrapper>;
};

export default BuildingTypes;
