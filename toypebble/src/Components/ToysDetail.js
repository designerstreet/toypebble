import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MyNavbar from "./Navbar";
import Set1Image1 from '../assets2/A/1/A-1.png';
import Set1Image2 from '../assets2/A/1/A-1-Minor.jpg';
import Set1Image3 from '../assets2/A/1/A-1-Major.jpg';
import Set1Image4 from '../assets2/A/1/A-1-Book.jpg';
import Set1Image5 from '../assets2/A/1/A-1-Learning.jpg';
import Set2Image1 from '../assets2/A/2/Screenshot 2024-06-24 164546.png';
import Set2Image2 from '../assets2/A/2/Minor.jpeg';
import Set2Image3 from '../assets2/A/2/Major.jpeg';
import Set2Image4 from '../assets2/A/2/Book.jpeg';
import Set2Image5 from '../assets2/A/2/Learning.jpeg';
import Set3Image1 from '../assets2/A/3/Screenshot 2024-06-24 171058.png';
import Set3Image2 from '../assets2/A/3/Minor.jpeg';
import Set3Image3 from '../assets2/A/3/Major.jpeg';
import Set3Image4 from '../assets2/A/3/Book.jpeg';
import Set3Image5 from '../assets2/A/3/Learning.jpeg';
import Set4Image1 from '../assets2/A/4/Screenshot 2024-06-24 172304.png';
import Set4Image2 from '../assets2/A/4/Minor.jpeg';
import Set4Image3 from '../assets2/A/4/Major.jpeg';
import Set4Image4 from '../assets2/A/4/Book.jpeg';
import Set5Image1 from '../assets2/A/5/Screenshot 2024-06-24 175958.png';
import Set5Image2 from '../assets2/A/5/Minor.jpeg';
import Set5Image3 from '../assets2/A/5/Major.jpeg';
import Set5Image4 from '../assets2/A/5/Book.jpeg';
import Set5Image5 from '../assets2/A/5/Learning.jpeg';
import Set6Image1 from '../assets2/A/6/Screenshot 2024-06-24 180407.png';
import Set6Image2 from '../assets2/A/6/Minor.jpeg';
import Set6Image3 from '../assets2/A/6/Major.jpeg';
import Set6Image4 from '../assets2/A/6/Book.jpeg';
import Set6Image5 from '../assets2/A/6/Learning.jpeg';
import Set7Image1 from '../assets2/A/7/Screenshot 2024-06-24 180609.png';
import Set7Image2 from '../assets2/A/7/Minor.jpeg';
import Set7Image4 from '../assets2/A/7/Book.jpeg';
import Set7Image5 from '../assets2/A/7/Learning.jpeg';
import Set8Image1 from '../assets2/A/8/Screenshot 2024-06-24 180637.png';
import Set8Image2 from '../assets2/A/8/Minor.jpeg';
import Set8Image3 from '../assets2/A/8/Major.jpeg';
import Set8Image4 from '../assets2/A/8/Book.jpeg';
import Set8Image5 from '../assets2/A/8/Learning.jpeg';
import Set9Image1 from '../assets2/A/9/Screenshot 2024-06-24 181334.png';
import Set9Image2 from '../assets2/A/9/Minor.jpeg';
import Set9Image3 from '../assets2/A/9/Major.jpeg';
import Set9Image4 from '../assets2/A/9/Book.jpeg';
import Set9Image5 from '../assets2/A/9/Learning.jpeg';
import Set10Image1 from '../assets2/A/10/Screenshot 2024-06-24 181347.png';
import Set10Image2 from '../assets2/A/10/Minor.jpeg';
import Set10Image3 from '../assets2/A/10/Major.jpeg';
import Set10Image4 from '../assets2/A/10/Book.jpeg';
import Set10Image5 from '../assets2/A/10/Learning.jpeg';
import Set11Image1 from '../assets2/A/11/Screenshot 2024-06-24 181402.png';
import Set11Image2 from '../assets2/A/11/Minor.jpeg';
import Set11Image3 from '../assets2/A/11/Major.jpeg';
import Set11Image4 from '../assets2/A/11/Book.jpeg';
import Set11Image5 from '../assets2/A/11/Learning.jpeg';
import Set12Image1 from '../assets2/A/12/Screenshot 2024-06-24 181451.png';
import Set12Image3 from '../assets2/A/12/Major.jpeg';
import Set12Image4 from '../assets2/A/12/Book.jpeg';
import Set12Image5 from '../assets2/A/12/Learning.jpeg';
import Set13Image1 from '../assets2/B/1/Screenshot 2024-06-25 153229.png';
import Set13Image2 from '../assets2/B/1/Minor.jpeg';
import Set13Image3 from '../assets2/B/1/Major.jpeg';
import Set13Image4 from '../assets2/B/1/Book.jpeg';
import Set13Image5 from '../assets2/B/1/Learning.jpeg';
import Set14Image1 from '../assets2/B/2/Screenshot 2024-06-25 153250.png';
import Set14Image2 from '../assets2/B/2/Minor.webp';
import Set14Image3 from '../assets2/B/2/Major.jpeg';
import Set14Image4 from '../assets2/B/2/Book.jpeg';
import Set14Image5 from '../assets2/B/2/Learning.jpeg';
import Set15Image1 from '../assets2/B/3/Screenshot 2024-06-25 153339.png';
import Set15Image2 from '../assets2/B/3/Minor.jpeg';
import Set15Image4 from '../assets2/B/3/Book.jpeg';
import Set15Image5 from '../assets2/B/3/Learning.jpeg';
import Set16Image1 from '../assets2/B/4/Screenshot 2024-06-25 153426.png';
import Set16Image2 from '../assets2/B/4/Minor.jpeg';
import Set16Image3 from '../assets2/B/4/Major.jpeg';
import Set16Image4 from '../assets2/B/4/Book.jpeg';
import Set16Image5 from '../assets2/B/4/Learning.jpeg';
import Set17Image1 from '../assets2/B/5/Screenshot 2024-06-25 163108.png';
import Set17Image2 from '../assets2/B/5/Minor.jpeg';
import Set17Image3 from '../assets2/B/5/Major.jpeg';
import Set17Image4 from '../assets2/B/5/Book.jpeg';
import Set17Image5 from '../assets2/B/5/Learning.jpeg';
import Set18Image1 from '../assets2/B/6/Screenshot 2024-06-25 163138.png';
import Set18Image2 from '../assets2/B/6/Minor.jpg';
import Set18Image3 from '../assets2/B/6/Major.jpeg';
import Set18Image4 from '../assets2/B/6/Book.jpeg';
import Set18Image5 from '../assets2/B/6/Learning.jpeg';
import Set19Image1 from '../assets2/B/7/Screenshot 2024-06-25 163300.png';
import Set19Image2 from '../assets2/B/7/Minor.jpg';
import Set19Image3 from '../assets2/B/7/Major.jpeg';
import Set19Image5 from '../assets2/B/7/learning.jpeg';
import Set20Image1 from '../assets2/B/8/Screenshot 2024-06-25 163204.png';
import Set20Image2 from '../assets2/B/8/Minor.jpg';
import Set20Image3 from '../assets2/B/8/major.jpeg';
import Set20Image4 from '../assets2/B/8/Book.jpeg';
import Set20Image5 from '../assets2/B/8/Book1.jpeg';
import Set21Image1 from '../assets2/B/9/Screenshot 2024-06-25 164319.png';
import Set21Image2 from '../assets2/B/9/Minor.jpeg';
import Set21Image4 from '../assets2/B/9/Book.jpeg';
import Set21Image5 from '../assets2/B/9/Learning.jpeg';
import Set22Image1 from '../assets2/B/10/Screenshot 2024-06-25 164352.png';
import Set22Image2 from '../assets2/B/10/Minor.jpeg';
import Set22Image3 from '../assets2/B/10/Major.jpeg';
import Set22Image4 from '../assets2/B/10/Book.jpeg';
import Set22Image5 from '../assets2/B/10/Learning.jpeg';
import Set23Image1 from '../assets2/B/11/Screenshot 2024-06-25 164410.png';
import Set23Image2 from '../assets2/B/11/Minor.jpeg';
import Set23Image3 from '../assets2/B/11/Major.jpeg';
import Set23Image4 from '../assets2/B/11/Book.jpeg';
import Set24Image1 from '../assets2/B/12/Screenshot 2024-06-25 164158.png';
import Set24Image2 from '../assets2/B/12/Minor.jpeg';
import Set24Image3 from '../assets2/B/12/Major.jpeg';
import Set24Image4 from '../assets2/B/12/Book.jpeg';
import Set24Image5 from '../assets2/B/12/Learning.jpeg';





import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';



function ToysDetail() {
    const { imageIndex } = useParams();
    const [zoomedUrl, setZoomedUrl] = useState(null); // State for the zoomed image URL
    const [selectedImage, setSelectedImage] = useState(0); // State for selected image index
  
    // Define your sets of images
    const imageSets = [
        //Group A
      [Set1Image1, Set1Image2, Set1Image3, Set1Image4, Set1Image5], // Set 1
      [Set2Image1, Set2Image2, Set2Image3, Set2Image4, Set2Image5], // Set 2
      [Set3Image1, Set3Image2, Set3Image3, Set3Image4, Set3Image5], // Set 3
      [Set4Image1, Set4Image2, Set4Image3, Set4Image4], // Set 4
      [Set5Image1, Set5Image2, Set5Image3, Set5Image4, Set5Image5], // Set 5
      [Set6Image1, Set6Image2, Set6Image3, Set6Image4, Set6Image5], // Set 6
      [Set7Image1, Set7Image2, Set7Image4, Set7Image5], // Set 7
      [Set8Image1, Set8Image2, Set8Image3, Set8Image4, Set8Image5], // Set 8
      [Set9Image1, Set9Image2, Set9Image3, Set9Image4, Set9Image5], // Set 9
      [Set10Image1, Set10Image2, Set10Image3, Set10Image4, Set10Image5], // Set 10
      [Set11Image1, Set11Image2, Set11Image3, Set11Image4, Set11Image5], // Set 11
      [Set12Image1, Set12Image3, Set12Image4, Set12Image5], // Set 12

       //Group B
       [Set13Image1, Set13Image2, Set13Image3, Set13Image4, Set13Image5], //Set 13
       [Set14Image1, Set14Image2, Set14Image3, Set14Image4, Set14Image5], //Set 13
       [Set15Image1, Set15Image2, Set15Image4, Set15Image5], //Set 13
       [Set16Image1, Set16Image2, Set16Image3, Set16Image4, Set16Image5], //Set 13
       [Set17Image1, Set17Image2, Set17Image3, Set17Image4, Set17Image5], //Set 13
       [Set18Image1, Set18Image2, Set18Image3, Set18Image4, Set18Image5], //Set 13
       [Set19Image1, Set19Image2, Set19Image3, Set19Image5], //Set 13
       [Set20Image1, Set20Image2, Set20Image3, Set20Image4, Set20Image5], //Set 13
       [Set21Image1, Set21Image2, Set21Image4, Set21Image5], //Set 13
       [Set22Image1, Set22Image2, Set22Image3, Set22Image4, Set22Image5], //Set 13
       [Set23Image1, Set23Image2, Set23Image3, Set23Image4], //Set 13
       [Set24Image1, Set24Image2, Set24Image3, Set24Image4, Set24Image5], //Set 13
      // Add more sets as needed
    ];
  
    // Determine the current set of images based on imageIndex
    const currentImageSet = imageSets[imageIndex % imageSets.length];
  
    // Set zoomedUrl initially based on imageIndex
    useEffect(() => {
        const index = parseInt(imageIndex, 10);
        if (index >= 0 && index < imageSets.length) {
          setSelectedImage(0); // Reset to the first image in the new set
          setZoomedUrl(imageSets[index][0]); // Set the zoomed image to the first in the new set
        }
      }, [imageIndex]);

      const handleImageClick = (index) => {
        setZoomedUrl(imageSets[parseInt(imageIndex, 10)][index]);
        setSelectedImage(index);
      };
  
    return(
        <div>
            <MyNavbar/>

            <Grid container className="pt-4" style={{backgroundColor: '#FFF8BD'}}>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 25.png" style={{height: '160px'}}/>
                </Grid>
                <Grid item container xs={6} md={6} justifyContent="center" alignItems="center">
                    <div className="text-center">
                        <h4 style={{fontSize: '2.1rem', color: '#4A66C9', fontWeight: '600'}}>Unlock a World of Play!</h4>
                        <p style={{fontSize: '2.6rem', color: '#000', fontWeight: '500'}}>Explore, Learn, and Grow with Our <br></br> Curated Toy Collection.</p>
                    </div>
                </Grid>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 26.png" style={{height: '160px'}}/>
                </Grid>
            </Grid>

            <div className='container-fluid'>
                <Grid container justifyContent="center" alignItems="center" className='mt-5 mb-5' style={{backgroundColor: '#C4E6FF', borderRadius: '20px', paddingTop: '50px', paddingBottom: '50px'}}>
                    <Grid item container xs={12} md={5} justifyContent="center" alignItems="center">
                        <Grid item container xs={2} spacing={1}>
                            {imageSets[parseInt(imageIndex, 10)].map((imageUrl, index) => (
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

                        {/* Zoomed image */}
                        <Grid item xs={10}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            {zoomedUrl ? (
                            <img
                                src={zoomedUrl}
                                alt="Zoomed Image"
                                style={{
                                    width: '100%',
                                    height: 'auto', // Maintain aspect ratio
                                    maxHeight: '400px', // Limit the maximum height
                                    objectFit: 'contain' // Maintain quality
                                  }}
                            />
                            ) : (
                            <div>No image selected</div>
                            )}
                        </Paper>
                        </Grid>

                    </Grid>

                    <Grid item container xs={12} md={5} mx={2} justifyContent="center" alignItems="center" >
                        <Grid container style={{backgroundColor: '#FFF', height: '435px', padding: '20px'}}>
                            <Grid item container xs={12} md={12}>
                                <img src='/assets/Group 23.png' alt='' style={{height: '50px'}}/>
                            </Grid>
                            <Grid item container xs={12} md={12} style={{paddingTop: '10px'}}>
                                <h1>Product Title</h1>                            
                            </Grid>
                            <Grid item container xs={12} md={12}>
                                <ul>
                                    <li>
                                        Product Description
                                    </li>
                                    <li style={{paddingTop: '5px'}}>
                                        Product Description
                                    </li>
                                    <li style={{paddingTop: '5px'}}>
                                        Product Description
                                    </li>
                                    <li style={{paddingTop: '5px'}}>
                                        Product Description
                                    </li>
                                </ul>                            
                            </Grid>
                            <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                                <Button variant='contained' fullWidth sx={{backgroundColor: '#738DE7', color: '#FFF', fontWeight: '600'}}>
                                    Book Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item container xs={12} md={12} className='mb-2' justifyContent="center" alignItems="center" style={{backgroundColor: '#E3F5FF', color: '#2E9CCC', fontWeight: '800', paddingTop: '8px'}}>
                        <a href='/#/toys' style={{textDecoration: 'none'}}><h1 className='text-center'><strong>Checkout more toys</strong></h1></a>
                    </Grid>              
                </Grid>
            </div>
        </div>
    )
}

export default ToysDetail;