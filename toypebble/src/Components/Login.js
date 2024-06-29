import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import MyNavbar from "./Navbar";
import InputAdornments from "./input";
import './Login.css';



function Login() {  
    
    return(
        <div style={{backgroundColor: '#F1DDC4', height: '100vh'}}>
            <MyNavbar />
            <Grid container direction="row" style={{backgroundColor: '#F1DDC4'}}>
                <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
                    <h1 className="text-center mt-3" style={{color: '#000', fontSize: '3.5rem', fontWeight: '500'}}>Login To <span style={{color: '#E83535'}}>Toy</span><span style={{color: '#3568E8'}}>Pebble</span></h1>
                </Grid>

                <Grid item container md={4} justifyContent="start" alignItems="center">
                    <img src="/assets/Group (9).png" alt="" style={{height: '270px'}}/>
                </Grid>
                <Grid item container md={4} className="pt-3">
                    <InputAdornments/>
                    <Grid container direction="row">
                        {/* <Grid item container xs={6} md={6} justifyContent="flex-start" alignItems="start">
                            <FormGroup sx={{paddingLeft: '10px'}}>
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                            </FormGroup>
                        </Grid>
                        <Grid item container xs={6} md={6} justifyContent="flex-end">
                            <a href="#" style={{paddingTop: '11px', paddingRight: '10px'}}>Forgot Password?</a>
                        </Grid>

                        <Grid item container xs={12} md={12}>
                        <Button variant="contained" fullWidth sx={{borderRadius: '20px', backgroundColor: '#738DE7', fontSize: '20px', color:'#FFF', fontWeight: '600'}}>LOGIN</Button>
                        </Grid> */}
                        <Grid item container xs={12} md={12} justifyContent="center" alignItems="center" className="pt-3">
                            <h3 className="text-center">Don't have an account? <a href="/#/signup" style={{color: '#EBA821', textDecoration: 'none'}}>Sign Up</a></h3>
                        </Grid>
                    </Grid>
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

export default Login;