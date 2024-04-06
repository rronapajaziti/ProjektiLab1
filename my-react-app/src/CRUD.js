import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);

  const [EditId, seteditId] = useState("");
  const [editname, setEditName] = useState("");
  const [editage, setEditAge] = useState("");
  const [editisActive, setEditIsActive] = useState(0);

  const empData = [
    {
      id: 1,
      name: "Rrona",
      age: 19,
      isActive: 1,
    },
    {
      id: 2,
      name: "Kaltrina",
      age: 19,
      isActive: 0,
    },
    {
      id: 3,
      name: "Veneta",
      age: 20,
      isActive: 0,
    },
    {
      id: 4,
      name: "Anjesa",
      age: 20,
      isActive: 1,
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(empData);
  }, []);

  const handleEdit = (id) => {
    // alert(id);
    handleShow();
  };
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this employee") == true
    ) {
      alert(id);
    }
  };
  const handleUpdate = () => {};
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="checkbox"
              checked={isActive === 1 ? true : false}
              onChange={(e) => handleEdit(e)}
              value={isActive}
            ></input>
            <label>Is Active</label>
          </Col>
          <Col>
            <button className="btn btn-primary">Submit</button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
            <th>Is active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify/update employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={editname}
                onChange={(e) => setEditName(e.target.value)}
              ></input>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
                value={editage}
                onChange={(e) => setEditAge(e.target.value)}
              ></input>
            </Col>
            <Col>
              <input
                type="checkbox"
                checked={editisActive === 1 ? true : false}
                onChange={(e) => setEditIsActive(e)}
                value={editisActive}
              ></input>
              <label>Is Active</label>
            </Col>
            <Col>
              <button className="btn btn-primary">Submit</button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default CRUD;
