import { useState } from "react";
import ApiCreate from "../../services/Api/ApiCreate";
import { toast } from "react-toastify";
import { ButtonDefault } from "../button-default";
import { Col, Row } from "react-bootstrap";
import "./style.css";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    phoneNumber: "",
    address: "",
    email: "",
    cpf: "",
    identityDocumentNumber: "",
    driverLicenseNumber: "",
    documentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerRenter(
      formData.name,
      formData.birth, // Deixe a data no formato "DD/MM/YYYY"
      formData.phoneNumber,
      formData.address,
      formData.email,
      formData.cpf,
      formData.identityDocumentNumber,
      formData.driverLicenseNumber,
      formData.documentType
    );
  };

  const registerRenter = async (
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
    const response = await ApiCreate.RenterCreate(
      name,
      birth + "T12:00:00.485Z",
      phoneNumber,
      address,
      email,
      cpf,
      identityDocumentNumber,
      driverLicenseNumber,
      documentType
    );

    if (response === true) {
      toast.success("Locatário cadastrado com sucesso!");
    } else {
      toast.error("Erro ao realizar cadastro");
    }
  };

  return (
    <Row style={{minHeight: "75vh"}}>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="mt-4 mb-4">Cadastro de Locatário</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex",flexDirection: "column", marginRight: "100px"}}>
              <div className="form-field">
                <label className="form-label">Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Data de Nascimento:</label>
                <input
                  type="date"
                  name="birth"
                  value={formData.birth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Telefone:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Endereço:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="form-field">
                <label className="form-label">CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">RG:</label>
                <input
                  type="text"
                  name="identityDocumentNumber"
                  value={formData.identityDocumentNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">CNH:</label>
                <input
                  type="text"
                  name="driverLicenseNumber"
                  value={formData.driverLicenseNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Tipo de Documento:</label>
                <input
                  type="text"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                />
              </div>
            </div>
              <div
                className="form-field"
                style={{
                  display: "flex",
                  // alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: "-90px"
                }}
              >
                <ButtonDefault
                  action={handleSubmit}
                  bgColor="#008000"
                  textColor="#fff"
                  type="submit"
                >
                  Cadastrar
                </ButtonDefault>
              </div>
          </form>
      </Col>
    </Row>
  );
};
