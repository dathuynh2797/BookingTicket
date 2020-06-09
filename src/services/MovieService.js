import axios from "axios";
import { domain, groupID } from "../settings/config";

export class MovieService {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return axios({
      url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
      method: "GET",
    });
  };
  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
}

export const movieService = new MovieService();
