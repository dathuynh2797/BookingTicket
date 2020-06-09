import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";

export default function ShowTime(props) {
  const [lichChieuPhim, setlichChieuPhim] = useState({});

  useEffect(() => {
    let { maLichChieu } = props.match.params;
    movieService
      .layThongTinPhongVe(maLichChieu)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="trapezoid text-center"></div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
