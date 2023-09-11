import { useEffect, useState } from "react";
import ApiFindAll from "../../services/Api/ApiFindAll";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { CardCars } from "../../components/card";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { SearchComponent } from "../../components/search-component";
import { FiFilter } from "react-icons/fi";

export const Home = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [buttonAll, setButtonAll] = useState("todos");

  useEffect(() => {
    FindAll();
  }, []);

  const FindAll = async () => {
    try {
      const res = await ApiFindAll.CarsFindAll();
      let list = res.data.data;
      setCars(list);
      setFilteredCars(list);
    } catch (error) {
      console.error("Erro ao buscar os carros:", error);
    }
  };

  function filterBySearch(value) {
    if (cars.length === 0) {
      return; // Não faça nada se a matriz de carros estiver vazia
    }

    let filteredCars = cars.filter(
      (c) =>
        c.name.toLowerCase().includes(value.toLowerCase()) ||
        c.brand.toLowerCase().includes(value.toLowerCase()) ||
        c.color.toLowerCase().includes(value.toLowerCase()) ||
        c.steering.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCars(filteredCars);
  }

  function filterButton(activeU) {
    if (activeU != "true" && activeU != "false") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(
        cars.filter((c) => c.available === (activeU === "true" ? true : false))
      );
    }
    setButtonAll(activeU);
  }

  return (
    <>
      <Header />
      <Row
        style={{
          paddingTop: "20px",
          paddingRight: "225px",
          paddingLeft: "225px",
        }}
      >
        <Col>
          <SearchComponent
            filterBySearch={filterBySearch}
            placeholder="Buscar carros..."
          />
        </Col>
        <Col>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <FiFilter title="Filtro" />
              </InputGroup.Text>

              <Form.Select
                value={buttonAll}
                onChange={(e) => filterButton(e.target.value)}
              >
                <option value="todos">Todos</option>
                <option value="true">Disponíveis</option>
                <option value="false">Alugados</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "80vw",
          }}
        >
          {filteredCars // Renderize os carros filtrados em vez de cars
            .sort((a, b) =>
              a.name.toUpperCase().localeCompare(b.name.toUpperCase())
            )
            .map((car) => (
              <CardCars key={car.id} car={car} />
            ))}
        </div>

        <Footer />
      </Row>
    </>
  );
};
