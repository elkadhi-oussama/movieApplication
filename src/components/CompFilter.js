import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CompFilter({
  setsearchTitle,
  setsearchRate,
  setsearchGenre,
  setsearchLang,
}) {

  
  return (
    <Navbar className="serachNAv" data-bs-theme="dark">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search by Title"
              className=" mr-sm-2"
              onChange={(e)=>setsearchTitle(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search by Rate"
              className=" mr-sm-2"
              onChange={(e)=>setsearchRate(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select onChange={(e)=>setsearchGenre(e.target.value)} >
              <option value="" >Genre</option>
              <option value="action">action</option>
              <option value="comedy">comedy</option>
              <option value="drama">drama</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select  onChange={(e)=>setsearchLang(e.target.value)}>
              <option value ="">Lang</option>
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="AR">AR</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default CompFilter;
