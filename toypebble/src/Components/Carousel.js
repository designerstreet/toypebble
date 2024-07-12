import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import ToysDetail from './ToysDetail';

const Carousel = ({ sets, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [groupIndex, setGroupIndex] = useState(null);
  const [setIndex, setSetIndex] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  console.log(sets + index);

  const groupColors = ['#B8D4FF', '#F8FFA7', '#AAFFB2', '#FFA1A1', '#DCC1FF', '#FFBFE2', '#FFD8AA']; // Define your colors here

  useEffect(() => {
    if (groupIndex !== null && setIndex !== null) {
      setModalOpen(true);
    }
  }, [groupIndex, setIndex]);

  const handleClick = (groupIndex, setIndex, imageSize) => {
    setGroupIndex(groupIndex);
    setSetIndex(setIndex);
    setImageSize(imageSize);
  };

  const handleClose = () => {
    setModalOpen(false);
    setGroupIndex(null);
    setSetIndex(null);
    setImageSize(null);
  };

  const groupedSets = sets.flatMap(set => groupImages(set));

  return (
    <div>
      <div id={`carouselExampleControls${index}`} className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedSets.map((group, groupIdx) => (
            <div key={groupIdx} className={`carousel-item ${groupIdx === 0 ? 'active' : ''}`}>
              <div className="card-wrapper container-sm d-flex justify-content-around">
                {group.map((image, idx) => {
                  const originalGroupIndex = index; // Calculate the original group index
                  const backgroundColor = groupColors[originalGroupIndex % groupColors.length]; // Compute color based on originalGroupIndex

                  return (
                    <div
                      key={idx}
                      className="card"
                      style={{ width: '17.5rem', cursor: 'pointer' }}
                      onClick={() => handleClick(index, groupIdx * group.length + idx, sets[0][groupIdx * group.length])}
                    >
                      <img 
                        src={`/ToyImages/Group${index + 1}/Set${groupIdx * 4 + idx + 1}/1.jpeg`}
                        className="card-img-top"
                        alt={image.alt || `Image ${idx + 1}`}
                        style={{ border: '1px solid backgroundColor', backgroundColor: backgroundColor, padding: '20px', height: '260px' }} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {modalOpen && (
        <CustomModal open={modalOpen} handleClose={handleClose}>
          <ToysDetail imageSize={imageSize} setIndex={setIndex} groupIndex={groupIndex} />
        </CustomModal>
      )}
    </div>
  );
};

export default Carousel;

const groupImages = (images, groupSize = 4) => {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += groupSize) {
    groupedImages.push(images.slice(i, i + groupSize));
  }
  return groupedImages;
};
