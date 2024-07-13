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
import { useAuth } from '../AuthContext'; // Import useAuth hook

export default function InputAdornments() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from useAuth

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Login failed');
      }

      const data = await response.json();
      // Handle successful login
      console.log('Login successful:', data);
      login(); // Set the user as authenticated
      navigate('/subscription'); // Redirect to subscription page
    } catch (error) {
      setError(error.message);
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
        </FormControl>
      </Grid>
      {error && (
        <Grid item xs={12}>
          <FormHelperText error>{error}</FormHelperText>
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
