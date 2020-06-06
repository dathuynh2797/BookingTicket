import axios from "axios";
import { domain, groupID } from "../settings/config";

export class MovieService {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
}

export const movieService = new MovieService();
