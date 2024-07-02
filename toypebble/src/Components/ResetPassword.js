import React, { useState } from 'react';
import { Button, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MyNavbar from "./Navbar";
import axios from 'axios'; // Import Axios or another HTTP library for making requests
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const currentUrl = window.location.href;

// Find the position of the token parameter in the URL
const tokenIndex = currentUrl.indexOf('token=');

// If the token parameter is found
let token = "";
if (tokenIndex !== -1) {
  // Extract the token value
  token = currentUrl.substring(tokenIndex + 6);

  // Log or use the token as needed
  console.log(token);
} else {
  console.error('Token parameter not found in the URL');
}


const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
        // Make a request to your backend to handle the password reset
        const response = await fetch('http://127.0.0.1:8080/api/auth/resetPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({token, password, confirmPassword }),
        });
  
        if (response.ok) {
          const data = await response.json();
          // Handle success, e.g., show a success message to the user
          console.log('Password reset successful:', data.message);
          setPassword("")
          setConfirmPassword("")
          navigate('/login')
        } else {
          const errorData = await response.json();
          // Handle errors, e.g., display an error message to the user
          console.error('Password reset failed:', errorData.message);
        }
      } catch (error) {
        console.error('Error during password reset:', error);
      }
    };

  return (
    <div style={{ backgroundColor: '#F1DDC4', height: '100vh' }}>
      <MyNavbar />
      <Grid container direction="row" style={{ backgroundColor: '#F1DDC4' }}>
        <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
          <h1 className="text-center mt-3" style={{ color: '#000', fontSize: '3.5rem', fontWeight: '500' }}>RESET PASSWORD</h1>
        </Grid>

        <Grid item container md={4} justifyContent="start" alignItems="center">
          <img src="/assets/Group (9).png" alt="" style={{ height: '270px' }} />
        </Grid>

        <Grid item container md={4} >
          <Grid item container xs={12} md={12}>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Set Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Set Password"
                sx={{ backgroundColor: '#FFF' }}
              />
            </FormControl>
          </Grid>

          <Grid item container xs={12} md={12}>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                sx={{ backgroundColor: '#FFF' }}
              />
            </FormControl>
          </Grid>

          <Grid item container xs={12} md={12}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              sx={{ borderRadius: '20px', backgroundColor: '#738DE7', fontSize: '20px', color: '#FFF', fontWeight: '600', padding: '10px 0px' }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>

        <Grid container item md={4} justifyContent="end" alignItems="center">
          <img src="/assets/Group (10).png" alt="" style={{ height: '270px' }} />
        </Grid>

        <Grid item container xs={6} md={6} justifyContent="start">
          <img src="/assets/Group (11).png" alt="" className="img-fluid" style={{ height: '225px' }} />
        </Grid>
        <Grid item container xs={6} md={6} justifyContent="end">
          <img src="/assets/Group (12).png" alt="" className="img-fluid" style={{ height: '225px' }} />
        </Grid>
      </Grid>

      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>{successMessage}</p>}
    </div>
  );
}

export default ResetPassword;
