import { Grid } from "@mui/material";
import MyNavbar from "./Navbar";


import './Toys.css';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

// const imageSets1 = [
//     [
//       { src: '/assets/Frame 110.png', link: '/toysdetail/0' },
//       { src: '/assets/Frame 111.png', link: '/toysdetail/1' },
//       { src: '/assets/Frame 112.png', link: '/toysdetail/2' },
//       { src: '/assets/Frame 113.png', link: '/toysdetail/3'  },
//     ],
//     [
//       { src: '/assets/Frame 114.png', link: '/toysdetail/4' },
//       { src: '/assets/Frame 115.png', link: '/toysdetail/5' },
//       { src: '/assets/Frame 116.png', link: '/toysdetail/6'  },
//       { src: '/assets/Frame 117.png', link: '/toysdetail/7' },
//     ],
//     [
//       { src: '/assets/Frame 118.png', link: '/toysdetail/8' },
//       { src: '/assets/Frame 119.png', link: '/toysdetail/9'  },
//       { src: '/assets/Frame 120.png', link: '/toysdetail/10'  },
//       { src: '/assets/Frame 121.png', link: '/toysdetail/11'},
//     ],
//   ];
  
//   const imageSets2 = [
//     [
//       { src: '/assets/Component 18.png', link: '/toysdetail/12'  },
//       { src: '/assets/Component 19.png', link: '/toysdetail/13' },
//       { src: '/assets/Component 20.png', link: '/toysdetail/14' },
//       { src: '/assets/Component 21.png', link: '/toysdetail/15'  },
//     ],
//     [
//       { src: '/assets/Component 22.png', link: '/toysdetail/16' },
//       { src: '/assets/Component 23.png', link: '/toysdetail/17'  },
//       { src: '/assets/Component 24.png', link: '/toysdetail/18' },
//       { src: '/assets/Component 25.png', link: '/toysdetail/19'  },
//     ],
//     [
//       { src: '/assets/Component 26.png', link: '/toysdetail/20' },
//       { src: '/assets/Component 27.png', link: '/toysdetail/21'},
//       { src: '/assets/Component 28.png', link: '/toysdetail/22'  },
//       { src: '/assets/Component 29.png', link: '/toysdetail/23' },
//     ],
//   ];

//   const imageSets3 = [
//     [
//         { src: '/assets/Component 43.png', link: '/toysdetail/24' },
//         { src: '/assets/Component 44.png', link: '/toysdetail/25' },
//         { src: '/assets/Component 45.png', link: '/toysdetail/26' },
//         { src: '/assets/Component 46.png', link: '/toysdetail/27' },
//     ],
//     [
//         { src: '/assets/Component 47.png', link: '/toysdetail/28' },
//         { src: '/assets/Component 48.png', link: '/toysdetail/29' },
//         { src: '/assets/Component 49.png', link: '/toysdetail/30' },
//         { src: '/assets/Component 50.png', link: '/toysdetail/31' },
//     ],
//     [
//         { src: '/assets/Component 51.png', link: '/toysdetail/32' },
//         { src: '/assets/Component 52.png', link: '/toysdetail/33' },
//         { src: '/assets/Component 53.png', link: '/toysdetail/34' },
//         { src: '/assets/Component 54.png', link: '/toysdetail/35' },
//     ],
// ];

// const imageSets4 = [
//     [
//         { src: '/assets/Component 68.png', link: '/toysdetail/36' },
//         { src: '/assets/Component 69.png', link: '/toysdetail/37' },
//         { src: '/assets/Component 70.png', link: '/toysdetail/38' },
//         { src: '/assets/Component 71.png', link: '/toysdetail/39' },
//     ],
//     [
//         { src: '/assets/Component 72.png', link: '/toysdetail/40' },
//         { src: '/assets/Component 73.png', link: '/toysdetail/41' },
//         { src: '/assets/Component 74.png', link: '/toysdetail/42' },
//         { src: '/assets/Component 75.png', link: '/toysdetail/43' },
//     ],
//     [
//         { src: '/assets/Component 76.png', link: '/toysdetail/44' },
//         { src: '/assets/Component 77.png', link: '/toysdetail/45' },
//         { src: '/assets/Component 78.png', link: '/toysdetail/46' },
//         { src: '/assets/Component 79.png', link: '/toysdetail/47' },
//     ],
// ];

// const imageSets5 = [
//     [
//       { link: '/toysdetail/48', src: "/assets/Component 93.png" },
//       { link: '/toysdetail/49', src: "/assets/Component 94.png" },
//       { link: '/toysdetail/50', src: "/assets/Component 95.png" },
//       { link: '/toysdetail/51', src: "/assets/Component 96.png" }
//     ],
//     [
//       { link: '/toysdetail/52', src: "/assets/Component 97.png" },
//       { link: '/toysdetail/53', src: "/assets/Component 98.png" },
//       { link: '/toysdetail/54', src: "/assets/Component 99.png" },
//       { link: '/toysdetail/55', src: "/assets/Component 100.png" }
//     ],
//     [
//       { link: '/toysdetail/56', src: "/assets/Component 101.png" },
//       { link: '/toysdetail/57', src: "/assets/Component 102.png" },
//       { link: '/toysdetail/58', src: "/assets/Component 103.png" },
//       { link: '/toysdetail/59', src: "/assets/Component 104.png" }
//     ]
//   ];
  
//   const imageSets6 = [
//     [
//       { link: '/toysdetail/60', src: "/assets/Component 119.png" },
//       { link: '/toysdetail/61', src: "/assets/Component 120.png" },
//       { link: '/toysdetail/62', src: "/assets/Component 121.png" },
//       { link: '/toysdetail/63', src: "/assets/Component 122.png" }
//     ],
//     [
//       { link: '/toysdetail/64', src: "/assets/Component 123.png" },
//       { link: '/toysdetail/65', src: "/assets/Component 124.png" },
//       { link: '/toysdetail/66', src: "/assets/Component 125.png" },
//       { link: '/toysdetail/67', src: "/assets/Component 126.png" }
//     ],
//     [
//       { link: '/toysdetail/68', src: "/assets/Component 127.png" },
//       { link: '/toysdetail/69', src: "/assets/Component 128.png" },
//       { link: '/toysdetail/70', src: "/assets/Component 129.png" },
//       { link: '/toysdetail/71', src: "/assets/Component 130.png" }
//     ]
//   ];
  
//   const imageSets7 = [
//     [
//       { link: '/toysdetail/72', src: "/assets/Component 144.png" },
//       { link: '/toysdetail/73', src: "/assets/Component 145.png" },
//       { link: '/toysdetail/74', src: "/assets/Component 146.png" },
//       { link: '/toysdetail/75', src: "/assets/Component 147.png" }
//     ],
//     [
//       { link: '/toysdetail/76', src: "/assets/Component 148.png" },
//       { link: '/toysdetail/77', src: "/assets/Component 149.png" },
//       { link: '/toysdetail/78', src: "/assets/Component 150.png" },
//       { link: '/toysdetail/79', src: "/assets/Component 151.png" }
//     ],
//     [
//       { link: '/toysdetail/80', src: "/assets/Component 152.png" },
//       { link: '/toysdetail/81', src: "/assets/Component 153.png" },
//       { link: '/toysdetail/82', src: "/assets/Component 154.png" },
//       { link: '/toysdetail/83', src: "/assets/Component 155.png" }
//     ]
//   ];

function Toys() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/ImageConfig.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
    
    return(
        <div>
            <MyNavbar/>
            <Grid container className="pt-4" style={{backgroundColor: '#FFF8BD'}}>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 25.png" alt="" style={{height: '160px'}}/>
                </Grid>
                <Grid item container xs={6} md={6} justifyContent="center" alignItems="center">
                    <div className="text-center">
                        <h4 style={{fontSize: '2.1rem', color: '#4A66C9', fontWeight: '600'}}>Unlock a World of Play!</h4>
                        <p style={{fontSize: '2.6rem', color: '#000', fontWeight: '500'}}>Explore, Learn, and Grow with Our <br></br> Curated Toy Collection.</p>
                    </div>
                </Grid>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 26.png" alt="" style={{height: '160px'}}/>
                </Grid>
            </Grid>


           
            
            
{data.Groups.map((sets, index) => (
    <div>
        <Grid container  className="mt-5">
            <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                <img src={`/assets/Group${index + 1}.png`} alt=""/>
            </Grid>                   
        
        </Grid>
        <div key={index}>
            <Carousel sets={sets} index={index} />
           
        </div>
        </div>
        
      ))}

            {/* <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 24.png" alt=""/>
                </Grid>                   
                
            </Grid>

            
             <Carousel images={imageSets2} id="2" />

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 25.png" alt=""/>
                </Grid>                   
                
            </Grid>

            
            <Carousel images={imageSets3} id="3" />

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 26.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <Carousel images={imageSets4} id="4" />

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 27.png" alt=""/>
                </Grid>                   
                
            </Grid>

        
            <Carousel images={imageSets5} id="5" />


            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 28.png" alt=""/>
                </Grid>                   
                
            </Grid>

         
            <Carousel images={imageSets6} id="6" />


            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 29.png" alt=""/>
                </Grid>                   
                
            </Grid>

         
            <Carousel images={imageSets7} id="7" /> */}
        
            <Footer/>
    
        </div>

    );
}




export default Toys;