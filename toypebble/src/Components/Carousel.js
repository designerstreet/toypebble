import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomModal from './CustomModal';
import ToysDetail from './ToysDetail';

const Carousel = ({ images, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setModalImageIndex(index);  // Set the correct index here
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalImageIndex(null);
  };

  return (
    <div>
      <div id={`carouselExampleControls${id}`} className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((imageSet, setIndex) => (
            <div key={setIndex} className={`carousel-item ${setIndex === 0 ? 'active' : ''}`}>
              <div className="card-wrapper container-sm d-flex justify-content-around">
                {imageSet.map((image, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{ width: '17.5rem', cursor: 'pointer' }}
                    onClick={() => handleClick(idx)}  // Pass the index of the clicked image
                  >
                    <img src={image.src} className="card-img-top" alt="..." />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {modalOpen && (
        <CustomModal open={modalOpen} handleClose={handleClose}>
          <ToysDetail imageIndex={modalImageIndex} />
        </CustomModal>
      )}
    </div>
  );
};

export default Carousel;
