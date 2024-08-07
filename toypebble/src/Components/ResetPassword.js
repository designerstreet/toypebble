import React, { useState } from 'react';
import { Button, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
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
  
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make a request to your backend to handle the password reset
      const response = await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/resetpassword`, {
        token,
        newPassword,
        confirmPassword
      });
  
      // Handle success
      if (response.status === 200) {
        const data = response.data;
        console.log('Password reset successful:', data.message);
        setNewPassword("");
        setConfirmPassword("");
        setSuccessMessage('Password reset successful');
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
      } else {
        setError('Password reset failed');
      }
    } catch (error) {
      // Handle errors
      console.error('Error during password reset:', error);
      setError('Password reset failed');
    }
  };

  return (
    <div style={{ backgroundColor: '#F1DDC4', height: '100vh' }}>
      
      <Grid container direction="row" style={{ backgroundColor: '#F1DDC4' }}>
        <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
          <h1 className="text-center mt-3" style={{ color: '#000', fontSize: '3.5rem', fontWeight: '500' }}>RESET PASSWORD</h1>
        </Grid>

        <Grid item container md={4} justifyContent="start" alignItems="center">
          <img src="/assets/Group (9).png" alt="" style={{ height: '270px' }} />
        </Grid>

        <Grid item container md={4} xs={12} justifyContent="center" alignItems="center">
          <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Set Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

          <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
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
            {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '5px' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green', textAlign: 'center', marginTop: '5px' }}>{successMessage}</p>}
          </Grid>

          <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
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

      
    </div>
  );
}

export default ResetPassword;
