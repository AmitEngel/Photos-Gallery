import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const CategoryModal = ({ showModal, handleCloseModal, handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Search Photos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="searchInput">
            <Form.Label>Select Your Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category"
              value={searchValue}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => handleSearch(searchValue)}>
          Search
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategoryModal;