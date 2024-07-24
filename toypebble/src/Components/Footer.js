import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

function Footer() {
    return(
        <div className="container-fluid special pt-5 mt-5" style={{backgroundColor: 'rgb(129 194 239)'}}>            
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item container xs={6} md={6}>
                    <Grid item container xs={12} md={12}>
                        <h3 style={{color: '#000', fontWeight: '600'}}>OFFICE ADDRESS</h3>
                    </Grid>
                    <Grid item container xs={12} md={12} className="mt-3">
                       <p style={{ color: '#000', fontSize: '25px'}}> <LocationOnIcon/> &nbsp; B-002 Skylark Esta, Hoodi, Bangalore- 560048</p>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                        <p><a href="mailto:support@toypebble.com" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}> <EmailIcon/> &nbsp; support@toypebble.com</a></p>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                        <p><a href="tel:8904299962" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}> <LocalPhoneIcon/> &nbsp; +91-8904299962</a></p>
                    </Grid>
                </Grid>

                <Grid item container xs={6} md={4}>
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
            

                <Grid item container xs={6} md={2}>
                <Grid item container xs={4} md={12}>
                    <a href="#" style={{textDecoration: 'none'}}>
                  
                        <WhatsAppIcon style={{color: '#FFF', fontSize: '40px', border: '1px solid rgb(106, 225, 106)', borderRadius: '50%', padding: '6px', backgroundColor: 'rgb(106, 225, 106)'}}/>
                    </a>
                    </Grid>
                    <Grid item container xs={4} md={12}>
                        <a href="#"style={{textDecoration: 'none'}}>                           
                            <InstagramIcon style={{color: 'rgb(226, 62, 117)', fontSize: '35px'}}/>
                        </a>
                    </Grid>
                    <Grid item container xs={4} md={12}>
                        <a href="#"style={{textDecoration: 'none'}}>                          
                            <FacebookIcon style={{color: 'rgb(52, 118, 241)', fontSize: '35px'}}/>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Footer;