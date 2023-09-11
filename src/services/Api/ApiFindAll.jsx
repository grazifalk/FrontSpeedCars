import { toast } from "react-toastify";
import { api } from "./ApiConnection";

const CarsFindAll = async () => {
  try {
    const cars = await api.get(`Car`);
    if (cars.status === 200) return cars;
    return false;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(error.response.headers.error);
    }
  }
};

export default { CarsFindAll };
