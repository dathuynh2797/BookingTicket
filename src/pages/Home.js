import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";
import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

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
        <Col span={4}>
          <Card
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
            <NavLink
              className="btn btn-success"
              to={`/moviedetail/${phim.maPhim}`}
            >
              Đăt Vé
            </NavLink>
          </Card>
        </Col>
      );
    });
  };
  return <Row>{renderPhim()}</Row>;
}
