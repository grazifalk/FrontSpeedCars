import "./style.css";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ButtonDefault } from "../button-default";
import { Link } from "react-router-dom";
import Renter from "../../assets/renter.svg";
import ApiFindByCPF from "../../services/Api/ApiFindByCPF";
import ApiFindByCNH from "../../services/Api/ApiFindByCNH";

export const RenterCard = () => {
  const [formData, setFormData] = useState({
      documentType: "", // Valor inicial vazio
      documentValue: "", // Valor inicial vazio para o número do documento
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const findByCPF = async (cpf) => {
      const res = await ApiFindByCPF.RenterFindByCPF(cpf);
      console.log(res.data.data);
    return res.data.data;
  };

  const findByCNH = async (driverLicenseNumber) => {
      const res = await ApiFindByCNH.RenterFindByCNH(driverLicenseNumber);
      console.log(res);
    return res.data.data;
  };

  const handleSearch = async () => {
    if (formData.documentType === "CPF") {
      const data = await findByCPF(formData.documentValue);
        return data;
    } else if (formData.documentType === "CNH") {
      const data = await findByCNH(formData.documentValue);
      return data;
    }
    };
    
  return (
    <div style={{ minHeight: "75vh" }}>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Card
            className="mt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              height: "10vh",
              width: "40vw",
              justifyContent: "space-between",
            }}
          >
            <label className="form-label">Tipo de Documento:</label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="CPF">CPF</option>
              <option value="CNH">CNH</option>
            </select>
            <input
              type="text"
              name="documentValue"
              value={formData.documentValue}
              onChange={handleChange}
              placeholder="Número do documento..."
            />
            <ButtonDefault bgColor="#008000" textColor="#fff" onClick={handleSearch}>
              Buscar
            </ButtonDefault>
          </Card>
        </Col>
        <Col
          className="mt-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            style={{ display: "flex", flexDirection: "row", padding: "10px" }}
          >
            <span className="renter-text">Locatário não encontrado.</span>
            <Link to="/register" className="links-navbar">
              Cadastrar?
            </Link>
          </Card>
        </Col>
        <Col
          className="mt-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            style={{ padding: "10px", display: "flex", flexDirection: "row" }}
          >
            <div>
              <img src={Renter} className="renter-img" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span>
                <strong>Nome:</strong> Graziela Falk
              </span>
              <span>
                <strong>Data de Nascimento:</strong> 17/08/1990
              </span>
              <span>
                <strong>Telefone:</strong>
              </span>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
