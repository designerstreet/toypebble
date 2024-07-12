import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { titlesAndDescriptions } from './titlesAndDescriptions'; // Import the titles and descriptions

function ToysDetail({ groupIndex, setIndex, imageSize }) {
  const [zoomedUrl, setZoomedUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageSets, setImageSets] = useState([]);

  console.log(imageSize)
  console.log(groupIndex)
  console.log(setIndex)

  const groupColors = ['#C4E6FF', '#F8FFA7', '#AAFFB2', '#FFA1A1', '#DCC1FF', '#FFBFE2', '#FFD8AA']; // Define your colors here

 

  useEffect(() => {
    const newImageSets = [];
    for (let i = 1; i <= imageSize; i++) {
      newImageSets.push(`/ToyImages/Group${groupIndex + 1}/Set${setIndex + 1}/${i}.jpeg`);
    }
    setImageSets(newImageSets);
    setSelectedImage(0); // Reset to the first image in the set
    setZoomedUrl(newImageSets[0]); // Set the zoomed image to the first in the set
  }, [groupIndex, setIndex, imageSize]);

  const handleImageClick = (index) => {
    if (imageSets && imageSets[index]) {
      setZoomedUrl(imageSets[index]);
      setSelectedImage(index);
    }
  };

  if (!imageSets || imageSets.length === 0) {
    console.log(imageSets.length)
    return null; // Or handle loading state if needed
  }

  const backgroundColor = groupColors[groupIndex % groupColors.length]; // Get the color based on groupIndex
  const currentTitle = titlesAndDescriptions[groupIndex]?.[setIndex]?.titles?.[selectedImage] || ''; // Get the current title
  const currentDescription = titlesAndDescriptions[groupIndex]?.[setIndex]?.descriptions?.[selectedImage] || ''; // Get the current description



  return (
    <div className="container-fluid">
      <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: backgroundColor, borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
        <Grid item container xs={12} md={5} justifyContent="center" alignItems="center">
          <Grid item container xs={2} spacing={1}>
            {imageSets.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  height: '100px',
                  cursor: 'pointer',
                  filter: selectedImage === index ? 'brightness(30%)' : 'none',
                  padding: '5px',
                }}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </Grid>
          <Grid item xs={10}>
            <Paper elevation={3} style={{ padding: 20 }}>
              {zoomedUrl ? (
                <img
                  src={zoomedUrl}
                  alt="Zoomed Image"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <div>No image selected</div>
              )}
            </Paper>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={5} mx={2} justifyContent="center" alignItems="center">
          <Grid container style={{ backgroundColor: '#FFF', height: '435px', padding: '20px' }}>
            <Grid item container xs={12} md={12}>
            <img src={`/assets/Group${groupIndex + 1}.png`} alt={`Group ${groupIndex + 1}`} style={{ height: '50px' }} />
            </Grid>
            <Grid item container xs={12} md={12} style={{ paddingTop: '10px' }}>
              {/* Use image link as product title */}
              <h3>{currentTitle}</h3>
            </Grid>

            <Grid item container xs={12} md={12}>
              
              <p>{currentDescription}</p>
            </Grid>

            <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
              {/* Use image link for navigation */}
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#738DE7', color: '#FFF', fontWeight: '600' }}
                // onClick={() => window.location.href = images[imageSetIndex][selectedImage].link}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ToysDetail;
