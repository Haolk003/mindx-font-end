import BaseService from "./base.service";
import axios from "axios";
class AuthenticateService extends BaseService {
  constructor() {
    super({ endpoint: "users" });
  }
  async login(user) {
    let http = axios.create({
      baseURL: `${this.api}`,
    });
    const res = await http.post(`/${this.endpoint}/login`, user);
    if (res.data.token) {
      sessionStorage.setItem("token", res.data.token);
    }
    return res.data;
  }
}
const join = new AuthenticateService();
export default join;
