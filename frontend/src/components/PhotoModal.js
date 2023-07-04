import React from 'react'
import { Button, Col, Image, Modal, Row } from 'react-bootstrap';

const PhotoModal = ({ selectedPhoto, onClose }) => {
    if (!selectedPhoto) {
      return null; 
  }  
    // extract relevant information from the selected photo
  const { views, downloads, comments, likes, collections, previewURL } =
    selectedPhoto;

    return (
      <Modal show={selectedPhoto !== null} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Photo Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={8}>
              <p>Views: {views}</p>
              <p>Downloads: {downloads}</p>
              <p>Comments: {comments}</p>
              <p>Likes: {likes}</p>
              <p>Collections: {collections}</p>
            </Col>
            <Col xs={6} md={4} className="d-flex align-items-end flex-column">
              <div className="mt-auto">
                <Image src={previewURL} alt="Selected thumbnail" />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default PhotoModal