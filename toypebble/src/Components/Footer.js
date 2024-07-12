import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

function Footer() {
    return(
        <div className="container-fluid pt-5">            
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item container xs={12} md={6}>
                    <Grid item container xs={12} md={12}>
                    <h5 style={{color: '#000', fontWeight: '600'}}>OFFICE ADDRESS</h5>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                       <p style={{ color: '#000', fontSize: '25px'}}><LocationOnIcon/> B-002 Skylark Esta, Hoodi, Bangalore- 560048</p>
                    </Grid>
                        <Grid item container xs={12} md={12}>
                    <a href="mailto:support@toypebble.com" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}><EmailIcon/> support@toypebble.com
                    </a>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                    <a href="tel:8904299962" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}> <LocalPhoneIcon/> 8904299962
                    </a>
                    </Grid>
                </Grid>

                <Grid item container xs={12} md={6}>
                <Grid item container xs={12} md={12}>
                <Link to="/privacyPolicy" style={{textDecoration: 'none', color: '#000', fontSize: '30px'}}>
                Privacy Policy
                </Link>
        </Grid>
        <Grid item container xs={12} md={12}>
                <Link to="/termsCondition" style={{textDecoration: 'none', color: '#000', fontSize: '30px'}}>
                Terms And Conditions
                </Link>
         </Grid>
                </Grid>
            

            </Grid>
        </div>
    )
};

export default Footer;