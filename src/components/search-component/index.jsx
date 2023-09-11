import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { ContainerSearch } from "./style";

export const SearchComponent = ({ placeholder, filterBySearch }) => {
  return (
    <ContainerSearch>
      <InputGroup
        className="mb-3"
        onChange={(e) => filterBySearch(e.target.value)}
      >
        <InputGroup.Text>
          <AiOutlineSearch />
        </InputGroup.Text>
        <Form.Control
          style={{
            color: "var(--preto-primario)",
            backgroundColor: "var(--branco)",
          }}
          placeholder={placeholder}
        />
      </InputGroup>
    </ContainerSearch>
  );
};
