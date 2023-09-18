import { useState } from "react";
import ApiFindByCPF from "../../services/Api/ApiFindByCPF";
import ApiFindByCNH from "../../services/Api/ApiFindByCNH";
import { ButtonDefault } from "../button-default";
import { Card, Col, Row } from "react-bootstrap";
import Renter from "../../assets/renter.svg";
import { Link } from "react-router-dom";
import "./style.css";

export const RenterCard = () => {
  const [documentType, setDocumentType] = useState("");
  const [cpf, setCPF] = useState("");
  const [cnh, setCNH] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleDocumentValueChange = (e) => {
    if (documentType === "CPF") {
      setCPF(e.target.value);
    } else if (documentType === "CNH") {
      setCNH(e.target.value);
    }
  };

  const handleSearch = async () => {
    if (documentType === "CPF") {
      try {
        const res = await ApiFindByCPF.RenterFindByCPF(cpf);
        setData(res.data);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar locatário:", error);
        // setError("Erro ao buscar locatário");
        setData({});
      }
    } else if (documentType === "CNH") {
      try {
        const res = await ApiFindByCNH.RenterFindByCNH(cnh);
        setData(res.data);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar locatário:", error);
        // setError("Erro ao buscar locatário");
        setData({});
      }
    }
  };

  function formatarData(date) {
    const dataObj = new Date(date);
    const dia = String(dataObj.getDate()).padStart(2, "0");
    const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function formatarTelefone(telefone) {
    // Remove todos os caracteres não numéricos
    const numeros = telefone.replace(/\D/g, "");

    // Verifica se tem 11 dígitos (incluindo o DDD)
    if (numeros.length === 11) {
      return `(${numeros.slice(0, 2)})${numeros.slice(2, 7)}-${numeros.slice(
        7
      )}`;
    } else {
      // Se não tiver 11 dígitos, assume que é um número inválido
      return "Número de telefone inválido";
    }
  }

  return (
    <div style={{ minHeight: "75vh" }}>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mt-2">Buscar Locatário</h2>
          <Card
            className="mt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              height: "10vh",
              width: "35vw",
              justifyContent: "space-between",
            }}
          >
            <label className="form-label">Buscar por:</label>

            <select
              name="documentType"
              value={documentType}
              onChange={handleDocumentTypeChange}
            >
              <option value="">Selecione</option>
              <option value="CPF">CPF</option>
              <option value="CNH">CNH</option>
            </select>

            <input
              type="text"
              placeholder="Número do Documento..."
              value={cpf}
              onChange={handleDocumentValueChange}
            />
            <ButtonDefault
              bgColor="#008000"
              textColor="#fff"
              action={handleSearch}
            >
              Buscar
            </ButtonDefault>
          </Card>
        </Col>
        {error && <p>{error}</p>}
        {data && Object.keys(data).length > 0 && (
          <Col
            className="mt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{ padding: "10px", display: "flex", flexDirection: "row" }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={Renter}
                  className="renter-img"
                  alt="Locatário"
                  style={{ height: "20vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>
                  <strong>Nome:</strong> {data.name}
                </span>

                <span>
                  <strong>Data de Nascimento:</strong>{" "}
                  {formatarData(data.birth)}
                </span>

                <span>
                  <strong>Telefone:</strong>{" "}
                  {formatarTelefone(data.phoneNumber)}
                </span>

                <span>
                  <strong>E-mail:</strong> {data.email}
                </span>
              </div>
            </Card>
          </Col>
        )}
        {data && Object.keys(data).length === 0 && (
          <Col
            className="mt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{ display: "flex", flexDirection: "row", padding: "10px" }}
            >
              <span className="renter-text">Locatário não encontrado.</span>

              <Link to="/register" className="link-register">
                Cadastrar?
              </Link>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};
