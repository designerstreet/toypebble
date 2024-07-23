import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import MyNavbar from "./Navbar";


import './Toys.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";


function Toys() {

    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(''); // Initialize selectedPlan state

    const navigate = useNavigate();
    const location = useLocation(); // useLocation hook to access current location
    const { isAuthenticated } = useAuth();
    const [data, setData] = useState(null);

    // useEffect to initialize selectedPlan state from URL parameter on component mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const plan = queryParams.get('plan');
        if (plan) {
            setSelectedPlan(plan);
        }
    }, [location.search]); // Run effect when location.search changes

    const handleBookNow = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
          }

        if (!selectedAgeGroup || !selectedPlan) {
            alert('Please select both Age Group and Subscription Plan.');
            return;
        }

        // Navigate to checkout with selected parameters
        navigate(`/checkout?ageGroup=${selectedAgeGroup}&plan=${selectedPlan}`);
    };

    const handleAgeGroupChange = (event) => {
        setSelectedAgeGroup(event.target.value);
    };

 

  useEffect(() => {
    fetch('/ImageConfig.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return  (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <CircularProgress />
        </Grid>
    );
    
  }
    
    return(
        <div>
            {/* <MyNavbar/> */}
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
            <Grid item container justifyContent="center" alignItems="center" className="mt-5">
            <Grid container item xs={12} md={10} justifyContent="center" alignItems="center" sx={{border: '1px solid rgb(183 184 255)', backgroundColor: 'rgb(183 184 255)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)'}}>
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center" className="mt-2">
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{fontSize: '40px', textAlign: 'center', color: '#000'}}>Please Select an Age group to Proceed</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{justifyContent: 'center', alignItems: 'center'}}
                                    value={selectedAgeGroup}
                                    onChange={handleAgeGroupChange}
                                >
                                    <FormControlLabel value="Age: 1-2 Years" control={<Radio />} label="Age: 1-2 Years"  style={{fontSize: '25px'}}/>
                                    <FormControlLabel value="Age: 2-3 Years" control={<Radio />} label="Age: 2-3 Years" />
                                    <FormControlLabel value="Age: 3-4 Years" control={<Radio />} label="Age: 3-4 Years" />
                                    <FormControlLabel value="Age: 4-5 Years" control={<Radio />} label="Age: 4-5 Years" />
                                    <FormControlLabel value="Age: 5-6 Years" control={<Radio />} label="Age: 5-6 Years" />
                                    <FormControlLabel value="Age: 6-7 Years" control={<Radio />} label="Age: 6-7 Years" />
                                    <FormControlLabel value="Age: 7+ Years" control={<Radio />} label="Age: 7+ Years" />
                
                                </RadioGroup>

                                
                        </FormControl>
                </Grid>
                <Grid item container xs={10} md={10} justifyContent="end" className="mt-3 mb-3">
                <Button variant="contained"  onClick={handleBookNow}>BOOK NOW</Button>
                </Grid>
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


            <Footer/>
    
        </div>

    );
}




export default Toys;