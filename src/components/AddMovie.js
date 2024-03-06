import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddMovie({ funAdd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setnewMovie] = useState({
    id: Math.random(),
    title: "",
    image: "",
    rate: 0,
    decr: "",
    stream: "",
    lang: "EN",
    genre: "action",
    downlaod: "",
  });
  const addNewMovie = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Button className="addButtn" variant="danger" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                name="image"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rate</Form.Label>
              <Form.Control
                name="rate"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>decr</Form.Label>
              <Form.Control
                name="decr"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>stream</Form.Label>
              <Form.Control
                name="stream"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>lang</Form.Label>
              <select
                name="lang"
                class="styleSelct custom-select"
                id="inputGroupSelect01"
                onChange={(e) => addNewMovie(e)}
              >
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="AR">AR</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>genre</Form.Label>
              <select
                name="genre"
                class="styleSelct2 custom-select"
                id="inputGroupSelect01"
                onChange={(e) => addNewMovie(e)}
              >
                <option value="action">action</option>
                <option value="comedy">comedy</option>
                <option value="drama">drama</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>downlaod</Form.Label>
              <Form.Control
                name="downlaod"
                autoFocus
                onChange={(e) => addNewMovie(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              return funAdd(newMovie), handleClose(), setnewMovie({});
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
