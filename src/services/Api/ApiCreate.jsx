import { api } from "./ApiConnection";
import { toast } from "react-toastify";

const RenterCreate = async (
  name,
  birth,
  phoneNumber,
  address,
  email,
  cpf,
  identityDocumentNumber,
  driverLicenseNumber,
  documentType
) => {
  try {
    const renter = await api.post(`Renter/register`, {
      name: name,
      birth: birth,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      cpf: cpf,
      identityDocumentNumber: identityDocumentNumber,
      driverLicenseNumber: driverLicenseNumber,
      documentType: documentType,
    });
    if (renter.status === 201) return renter;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default {
  RenterCreate,
};
