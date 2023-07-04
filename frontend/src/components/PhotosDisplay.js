import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PhotosDisplay.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import {
  fetchPhotos,
  goToNextPage,
  goToPrevPage,
  updateCategory,
  updatePage,
} from "../store/photos-actions";
import CategoryModal from "./CategoryModal";
import PhotoModal from "./PhotoModal";

const PhotosDisplay = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const { photos, category, currentPage, loading, error } = useSelector(
    (state) => state.photos
  );

  useEffect(() => {
    dispatch(fetchPhotos(category, currentPage));
  }, [dispatch, currentPage, category]);

  const handlePrevPage = () => {
    dispatch(goToPrevPage());
  };

  const handleNextPage = () => {
    dispatch(goToNextPage());
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (newCategory) => {
    dispatch(updateCategory(newCategory));
    dispatch(updatePage(1));
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-start">
          <Button
            variant="primary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleOpenModal}>
            Search Photos
          </Button>
          <CategoryModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            handleSearch={handleSearch}
          />
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleNextPage}>
            Next
          </Button>
        </Col>
      </Row>
      {loading ? (
        <div className="my-3 text-center">
          <Spinner animation="border" className="spinner" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="my-3">
          Error: {error}
        </Alert>
      ) : (
        <Row className="slide-in">
          {photos.map((photo, index) => (
            <Col
              key={photo.id}
              xs={12}
              sm={6}
              md={4}
              className={`mb-2 mt-2 slide-item ${
                index % 3 === 0 ? "slide-left" : "slide-right"
              }`}
            >
              <Card onClick={() => setSelectedPhoto(photo)}>
                <Card.Img
                  variant="top"
                  src={photo.webformatURL}
                  className="fixed-size-img rounded"
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <PhotoModal
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </Container>
  );
};

export default PhotosDisplay;
