import { toast } from "react-toastify";
import { api } from "./ApiConnection";

const RenterFindByCNH = async (driverLicenseNumber) => {
  try {
    const renter = await api.get(
      "Renter/cnh?driverLicenseNumber=" + driverLicenseNumber
    );
    if (renter.status === 200) return renter;
    return false;
  } catch (error) {
    toast.error(error.response.headers.error);
  }
};

export default { RenterFindByCNH };
