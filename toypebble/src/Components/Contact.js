import { Grid } from "@mui/material";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
    return(
        <div>
            <MyNavbar/>
            <Grid item container sx={{backgroundColor: '#D2DCFF'}}>
                <Grid item container xs={5} md={5} >
                    <Grid item container xs={12} md={12}>
                    <h5 style={{color: '#000', fontWeight: '600'}}>OFFICE ADDRESS</h5>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                    <p style={{ color: '#000', fontSize: '25px'}}><LocationOnIcon/> B-002 Skylark Esta, Hoodi, Bangalore- 560048</p>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                    <p><a href="mailto:support@toypebble.com" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}><EmailIcon/> support@toypebble.com</a></p>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                    <a href="tel:8904299962" style={{textDecoration: 'none', color: '#000', fontSize: '25px'}}> <LocalPhoneIcon/> 8904299962</a>
                    </Grid>
                </Grid>
                <Grid item container xs={5} md={5}>
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
                <Grid item container xs={2} md={2}>
                    <Grid item container xs={12} md={12}>
                    <a href="#" style={{textDecoration: 'none'}}>
                  
                        <WhatsAppIcon style={{color: '#FFF', fontSize: '40px', border: '1px solid rgb(106, 225, 106)', borderRadius: '50%', padding: '6px', backgroundColor: 'rgb(106, 225, 106)'}}/>
                    </a>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                        <a href="#"style={{textDecoration: 'none'}}>                           
                            <InstagramIcon style={{color: 'rgb(226, 62, 117)', fontSize: '35px'}}/>
                        </a>
                    </Grid>
                    <Grid item container xs={12} md={12}>
                        <a href="#"style={{textDecoration: 'none'}}>                          
                            <FacebookIcon style={{color: 'rgb(52, 118, 241)', fontSize: '35px'}}/>
                        </a>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={12}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7654409762436!2d77.70792767484167!3d12.98684878732994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119a7466931d%3A0x3ea402a3e3731417!2sSkylark%20Esta!5e0!3m2!1sen!2sin!4v1720770829449!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
};

export default Contact;