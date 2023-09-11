import Card from "react-bootstrap/Card";
import "./style.css";
import { ButtonDefault } from "../button-default";
import { useState } from "react";
import { GiCarDoor } from "react-icons/gi";
import { PiSuitcaseRollingFill } from "react-icons/pi";
import { TbSteeringWheel } from "react-icons/tb";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

export const CardCars = ({ car }) => {
  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(!details);
  };

  function formatarValorEmReal(valor) {
    // Verifica se o valor é um número
    if (typeof valor === "number") {
      // Formata o valor em real com duas casas decimais
      return "R$ " + valor.toFixed(2).replace(".", ",");
    } else {
      // Se não for um número, retorna uma string vazia
      return "";
    }
  }

  return (
    <Card className="card-cars">
      {!details ? (
        <>
          <h3>{car.name}</h3>
          <img src={car.photo} className="car-img" />
          <strong>Valor {formatarValorEmReal(car.price)} /hora</strong>
          <p className="show-details" onClick={showDetails}>
            Ver mais
          </p>
        </>
      ) : (
        <>
          <h3>{car.name}</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div className="card-detail">Marca: {car.brand}</div>
              <div className="card-detail">Cor: {car.color}</div>
              <div className="card-detail">Modelo: {car.modelId}</div>
              <div className="card-detail">
                <GiCarDoor size="20px" color="#008000" /> {car.doors} portas
              </div>
              <div className="card-detail">
                <PiSuitcaseRollingFill size="25px" color="#008000" /> Bagageiro
                {car.trunk}
              </div>
            </div>
            <div>
              <div className="card-detail">
                <TbSteeringWheel size="20px" color="#008000" /> {car.steering}
              </div>
              <div className="card-detail">
                Janela Elétrica:
                {car.powerWindow ? (
                  <BiCheckboxChecked size="25px" color="#008000" />
                ) : (
                  <AiOutlineCloseSquare size="18px" color="#ff0000" />
                )}
              </div>
              <div className="card-detail">
                Trava Elétrica:{" "}
                {car.powerDoorLocks ? (
                  <BiCheckboxChecked size="25px" color="#008000" />
                ) : (
                  <AiOutlineCloseSquare size="18px" color="#ff0000" />
                )}
              </div>
              <div className="card-detail">
                Ar-Condicionado:{" "}
                {car.airConditioner ? (
                  <BiCheckboxChecked size="25px" color="#008000" />
                ) : (
                  <AiOutlineCloseSquare size="18px" color="#ff0000" />
                )}
              </div>
            </div>
          </div>
          {car.available ? (
            <ButtonDefault bgColor="#008000" textColor="#fff">
              Alugar
            </ButtonDefault>
          ) : (
            <ButtonDefault
              bgColor="#ff0000"
              textColor="#fff"
              disabled={car.available == false}
            >
              Alugado
            </ButtonDefault>
          )}
          <p className="show-details" onClick={showDetails}>
            Ocultar Detalhes
          </p>
        </>
      )}
    </Card>
  );
};
