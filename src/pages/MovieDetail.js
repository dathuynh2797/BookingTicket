import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";
import { NavLink } from "react-router-dom";
var moment = require("moment");

export default function MovieDetail(props) {
  const [thongtinPhim, setthongtinPhim] = useState({});
  //Gọi service lấy dữ liệu tại
  useEffect(() => {
    movieService
      .layThongTinLichChieuPhim(props.match.params.maPhim)
      .then((res) => {
        console.log(res.data);
        setthongtinPhim(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  console.log("thongTinPhim", thongtinPhim);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5">
          <img
            src={thongtinPhim.hinhAnh}
            style={{ width: 200, height: 350 }}
            alt={thongtinPhim.maPhim}
          />
        </div>
        <div className="col-6 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{thongtinPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>{thongtinPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <hr />
      <h3>Thông Tin Lịch Chiếu</h3>
      <div className="container">
        <div className="row">
          <div
            className="nav flex-column nav-pills col-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {thongtinPhim.heThongRapChieu?.map((heThongRapChieu, index) => {
              return (
                <a
                  className="nav-link"
                  key={index}
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRapChieu.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src={heThongRapChieu.logo}
                    style={{ width: 35, height: 35 }}
                    alt={heThongRapChieu.maHeThongRap}
                  />
                  <span className="mx-2">{heThongRapChieu.tenHeThongRap}</span>
                </a>
              );
            })}
          </div>
          <div className="tab-content col-8" id="v-pills-tabContent">
            {thongtinPhim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <div
                  key={index}
                  className="tab-pane fade show"
                  id={heThongRap.maHeThongRap}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {/* {heThongRap.tenHeThongRap} */}
                  {heThongRap.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div key={index}>
                        <p className="display-4">{cumRap.tenCumRap}</p>
                        <div className="row">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 12)
                            .map((lichChieu, index) => {
                              return (
                                <NavLink
                                  to={`/showtime/${lichChieu.maLichChieu}`}
                                  key={index}
                                  className="col-2"
                                  href
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
