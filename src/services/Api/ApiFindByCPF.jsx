import { toast } from "react-toastify";
import { api } from "./ApiConnection";

const RenterFindByCPF = async (cpf) => {
  try {
    const renter = await api.get("Renter/cpf?cpf=" + cpf);
    if (renter.status === 200) return renter;
    return false;
  } catch (error) {
    toast.error(error.response.headers.error);
  }
};

export default { RenterFindByCPF };
