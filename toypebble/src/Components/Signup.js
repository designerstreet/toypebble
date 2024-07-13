import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import MyNavbar from "./Navbar";


import InputAdornments2 from "./input2";



function Signup() {

    

    
    return(
        <div style={{backgroundColor: '#F1DDC4', height: '100vh'}}>
            {/* <MyNavbar /> */}
            <Grid container direction="row" style={{backgroundColor: '#F1DDC4'}}>
                <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
                    <h1 className="text-center mt-3" style={{color: '#000', fontSize: '3.5rem', fontWeight: '500'}}>Sign Up To <span style={{color: '#E83535'}}>Toy</span><span style={{color: '#3568E8'}}>Pebble</span></h1>
                </Grid>

                <Grid item container md={4} justifyContent="start" alignItems="center">
                    <img src="/assets/Group (9).png" alt="" style={{height: '270px'}}/>
                </Grid>
                <Grid item container md={4} className="pt-3">
                    <InputAdornments2/>
                    
                </Grid>
                <Grid container item md={4} justifyContent="end" alignItems="center">
                    <img src="/assets/Group (10).png" alt="" style={{height: '270px'}} />
                </Grid>

                <Grid item container xs={6} md={6} justifyContent="start">
                    <img src="/assets/Group (11).png" alt="" className="img-fluid" style={{height: '225px'}}/>
                </Grid>
                <Grid item container xs={6} md={6} justifyContent="end">
                    <img src="/assets/Group (12).png" alt="" className="img-fluid" style={{height: '225px'}}/>
                </Grid>

            </Grid>
        </div>
    )
}

export default Signup;