import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function InputAdornments() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateInputs = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Backend Response:', data);

      const userData = data.user;
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(userData));
      
      setSuccessMessage('Login successful!');
      setError('');
      
      login();
      navigate('/subscription');
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-input-with-icon-adornment">Username</InputLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            }
            label="Username"
          />
          {emailError && <FormHelperText error>{emailError}</FormHelperText>}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
            label="Password"
          />
          {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}
        </FormControl>
      </Grid>
      {error && (
        <Grid item xs={12}>
          <FormHelperText error>{error}</FormHelperText>
        </Grid>
      )}
      {successMessage && (
        <Grid item xs={12}>
          <FormHelperText>{successMessage}</FormHelperText>
        </Grid>
      )}
      <Grid container direction="row">
        <Grid item container xs={6} md={6} justifyContent="flex-start" alignItems="start">
          <FormGroup sx={{ paddingLeft: '10px' }}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </FormGroup>
        </Grid>
        <Grid item container xs={6} md={6} justifyContent="flex-end">
          <a href="/#/forgotPassword" style={{ paddingTop: '11px', paddingRight: '10px' }}>
            Forgot Password?
          </a>
        </Grid>

        <Grid item container xs={12} md={12}>
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{ borderRadius: '20px', backgroundColor: '#738DE7', fontSize: '20px', color: '#FFF', fontWeight: '600' }}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
