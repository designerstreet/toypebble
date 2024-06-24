import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid } from '@mui/material';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    
    <Grid container>
        <Grid item container xs={12} md={12}>
            <FormControl sx={{ m: 1,}} fullWidth  variant="outlined">
                <InputLabel htmlFor="outlined-input-with-icon-adornment">
                Username
                </InputLabel>
                <OutlinedInput
                id="outlined-input-with-icon-adornment"
                endAdornment={
                    <InputAdornment position="end">
                    <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                }
                label="Username"
               sx={{
                backgroundColor: '#FFF',
               }}
                />
            </FormControl>
        </Grid>
        <Grid item container xs={12} md={12}>
            <FormControl sx={{ m: 1,}} fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
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
                sx={{
                    backgroundColor: '#FFF',
                   }}
            />
            </FormControl>
        </Grid>
    </Grid>      
    
  );
}
