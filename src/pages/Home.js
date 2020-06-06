import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";
import { Card, Row } from "antd";

const { Meta } = Card;

export default function Home(pros) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  // ComponentDidMount
  useEffect(() => {
    //Goi service api set lai state danhSachPhim
    movieService
      .layDanhSachPhim()
      .then((res) => {
        console.log(res.data);
        setDanhSachPhim(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const renderPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <Card
          col={6}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={phim.hinhAnh}
              style={{ height: 350, width: "100%" }}
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      );
    });
  };
  return <Row>{renderPhim()}</Row>;
}
