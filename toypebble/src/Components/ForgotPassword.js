import React, { useState } from 'react';
import { Button, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { EmailOutlined } from '@mui/icons-material';
import MyNavbar from "./Navbar";
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8080/api/auth/forgotpassword', { email });
      setSuccessMessage(response.data.msg);
      setError('');
      setEmail('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Something went wrong. Please try again.');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ backgroundColor: '#F1DDC4', height: '100vh' }}>
      <MyNavbar />
      <Grid container direction="row" style={{ backgroundColor: '#F1DDC4' }}>
        <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
          <h1 className="text-center mt-3" style={{ color: '#000', fontSize: '3.5rem', fontWeight: '500' }}>FORGOT PASSWORD</h1>
        </Grid>

        <Grid item container md={4} justifyContent="start" alignItems="center">
          <img src="/assets/Group (9).png" alt="" style={{ height: '270px' }} />
        </Grid>

        <Grid item container md={4} >
          <Grid item container xs={12} md={12}>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-input-with-icon-adornment">Enter your email</InputLabel>
              <OutlinedInput
                id="outlined-input-with-icon-adornment"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <EmailOutlined />
                  </InputAdornment>
                }
                label="Enter your email"
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

export default ForgotPassword;