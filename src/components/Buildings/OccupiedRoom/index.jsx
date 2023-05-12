import React from "react";
import { Room } from "../../../Generic/Style";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const OccupiedRoom = ({ userID }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios({ url: `/accomodation/2/user?_id=${userID}` }).then((data) => {
      setLoading(false);
      setData(data.data.data);
    });
  }, []);
  return (
    <Room color="red">
      {isLoading ? (
        <LoadingOutlined />
      ) : new Date() < new Date(+data.endDate) ? (
        dayjs(new Date(+data.endDate)).diff(new Date(), "d")
      ) : (
        0
      )}
    </Room>
  );
};

export default OccupiedRoom;
