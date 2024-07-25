import * as React from 'react';
import { Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Button } from '@mui/material';
import { EmailOutlined, ChildCare, PersonOutlineOutlined, Visibility, VisibilityOff, Home, Boy, Girl } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../AuthContext';


export default function InputAdornments2() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    parentname: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    babyname: '',
    gender: '',
    age: '',
  });
  const [error, setError] = React.useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { signup } = useAuth(); // Get signup function from useAuth

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate inputs
    if (formValues.password !== formValues.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      const userData = data.newUser || data.user;
      localStorage.setItem(
        "token",
        JSON.stringify(data.token)
      );
      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );
      // Handle successful signup, e.g., redirect to login page

       // Redirect to subscription page using navigate
       signup(); // Set the user as authenticated
       navigate('/subscription');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid container>
      <Grid item container xs={12} md={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-input-with-icon-adornment">Enter Parent's name</InputLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            name="parentname"
            value={formValues.parentname}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <PersonOutlineOutlined />
              </InputAdornment>
            }
            label="Enter Parent's name"
            sx={{ backgroundColor: '#FFF' }}
          />
        </FormControl>
      </Grid>
      <Grid item container xs={12} md={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-input-with-icon-adornment">Enter your email</InputLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
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
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-input-with-icon-adornment">Enter Baby's name</InputLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            name="babyname"
            value={formValues.babyname}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <ChildCare />
              </InputAdornment>
            }
            label="Enter baby's name"
            sx={{ backgroundColor: '#FFF' }}
          />
        </FormControl>
      </Grid>
      <Grid item container xs={12} md={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <FormLabel htmlFor="outlined-input-with-icon-adornment">Enter Baby's DOB</FormLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            name="age"
            type="date"
            value={formValues.age}
            onChange={handleInputChange}
            
            label="Enter baby's DOB"
            sx={{ backgroundColor: '#FFF' }}
          />
        </FormControl>
      </Grid>
      <Grid item container xs={12} md={12} style={{ paddingLeft: '10px' }}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={
                <React.Fragment>
                  <Girl style={{ marginRight: 4 }} />
                  Girl
                </React.Fragment>
              }
              sx={{ marginRight: 5 }}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={
                <React.Fragment>
                  <Boy style={{ marginRight: 4 }} />
                  Boy
                </React.Fragment>
              }
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item container xs={12} md={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-input-with-icon-adornment">Address</InputLabel>
          <OutlinedInput
            id="outlined-input-with-icon-adornment"
            name="address"
            multiline
            value={formValues.address}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <Home />
              </InputAdornment>
            }
            label="Address"
            sx={{ backgroundColor: '#FFF' }}
          />
        </FormControl>
      </Grid>
      <Grid item container xs={12} md={12}>
        <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Set Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formValues.password}
            onChange={handleInputChange}
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
            value={formValues.confirmPassword}
            onChange={handleInputChange}
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
      {error && (
        <Grid item xs={12}>
          <Box sx={{ color: 'red', mt: 1 }}>{error}</Box>
        </Grid>
      )}
      <Grid item container xs={12} md={12} className='mt-3'>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: '20px', backgroundColor: '#738DE7', fontSize: '20px', color: '#FFF', fontWeight: '600' }}
          onClick={handleSubmit}
        >
          SIGN UP
        </Button>
      </Grid>
    </Grid>
  );
}
