import React, { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import { Spin } from "antd";
import { Wrapper } from "./style";
import {
  MainRoomWrapper,
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../Generic/Style";
import OccupiedRoom from "../OccupiedRoom";
import { useQuery } from "react-query";

const SecondBuilding = () => {
  const axios = useAxios();

  const { isLoading, data } = useQuery(
    "accomodation/2",
    () =>
      axios({ url: "/accomodation/2/room" }).then((data) => {
        return data;
      }),
    { refetchOnWindowFocus: false }
  );


  return (
    <Wrapper>
      <Title>2 Building</Title>
      {isLoading ? (
        <Spin />
      ) : (
        <MainRoomWrapper>
          {data.data.data.map((roomValue) => (
            <RoomWrapper key={roomValue._id}>
              <RoomTitle>Room {roomValue.roomNumber}</RoomTitle>
              <RoomContainer>
                {roomValue.cliente?.map((clientiValue) =>
                  clientiValue.isBooked ? (
                    <Room color="processing" key={clientiValue.clienteID} />
                  ) : clientiValue.userID ? (
                    <OccupiedRoom
                      key={clientiValue.clienteID}
                      userID={clientiValue.userID}
                    />
                  ) : (
                    <Room color="green" key={clientiValue.clienteID} />
                  )
                )}
              </RoomContainer>
            </RoomWrapper>
          ))}
        </MainRoomWrapper>
      )}
    </Wrapper>
  );
};

export default SecondBuilding;
