import { Grid, Link } from "@mui/material";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

function Subscription() {
    return(
        <div>
            <MyNavbar backgroundColor="rgb(200 157 157 / 35%)"/>
            <Grid container>
                <img src="/assets/2147689857 1 (1).png" className="img-fluid" alt="" style={{width: '100%'}}/>
            </Grid>
            <Grid container direction="row" sx={{backgroundColor: '#FFFCB1'}}>
                <Grid item container xs={12} md={12} justifyContent="end" alignItems="end">
                    <img src="/assets/Group (5).png" />
                </Grid>
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <h1 style={{fontSize: '5rem'}}>Welcome to <span style={{color: '#FF2424'}}>Toy</span><span style={{color: '#4F4FD2'}}>Pebble</span>!</h1>
                </Grid>
                <Grid item container xs={2} md={2} >
                    <img src="/assets/Screenshot 2024-06-21 110505.png" style={{height: '150px', width: '170px'}}/>
                </Grid>
                <Grid item container xs={8} md={8}  justifyContent="center" alignItems="center">
                    <p className="text-center" style={{fontSize: '1.7rem', color: '#7A7A7A'}}>
                    Choose the perfect subscription plan for your family and enjoy endless fun with our wide range of toys. Our plans are designed to offer flexibility and savings, ensuring your kids always have something new and exciting to play with.
                    </p>
                </Grid>
                <Grid item container xs={2} md={2} justifyContent="center" alignItems="center">
                    <img src="/assets/Group (6).png"/>
                </Grid>
                <Grid item container xs={12} md={12}>
                    <img src="/assets/Screenshot 2024-06-21 114830.png" style={{width: '100%'}}/>
                </Grid>               

            </Grid>

            <Grid container>
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <div className="pt-3" style={{border: '1px solid #FFFCB1', backgroundColor: '#FFFCB1'}}>
                        <p style={{color: '#FF2323', fontSize: '25px', fontWeight: '600', }}><img src="/assets/Line 5.png"/>Price: ₹999 + GST per month<img src="/assets/Line 5.png"/></p>
                        <p className="text-center">Hurry! Grab this special offer before it’s gone! <br></br>Perfect for new members who want to experience the joy of ToyPebble at an unbeatable price.</p>
                    </div>
                </Grid>
            </Grid>

            <Grid container className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <h1 style={{fontSize: '3.5rem', fontWeight: '600'}}><span style={{color: '#FF2E2E'}}>Get </span><span style={{color: '#4F4FD2'}}> Started</span></h1>
                </Grid>

                <Grid item container xs={2} md={2} justifyContent="center" alignItems="center">
                    <img src="/assets/Group (7).png"/>
                </Grid>
                <Grid item container xs={8} md={8} justifyContent="center" alignItems="center">
                    <div className="text-center">
                        <p style={{color: '#000', fontWeight: '500', fontSize: '1.3rem'}}>Ready to subscribe? <span style={{color: '#545454'}}>Choose your plan below and start your journey with ToyPebble today!</span></p>
                        <p style={{color: '#000', fontWeight: '500', fontSize: '1.3rem'}}>For any queries, feel free to contact us at <a href="mailto:support@toypebble.com" style={{textDecoration: 'none', color: '#10F80B'}}>support@toypebble.com</a>.</p>
                    </div>
                </Grid>

               
                <Grid item container xs={2} md={2} justifyContent="center" alignItems="center">
                    <img src="/assets/Group (8).png"/>
                </Grid>
                
            </Grid>

            <Grid container className="mt-5" direction="row">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center" className="mb-4">
                    <h1 style={{fontWeight: '600', color: '#000'}}>Subscription Plans</h1>
                </Grid>

                <Grid item container xs={12} md={6} lg={4} justifyContent="center" alignItems="center">
                    <Link href="/#/toys"><img src="/assets/Frame 11.png" className="img-fluid" style={{cursor: 'pointer'}}/></Link>
                </Grid>
                <Grid item container xs={12} md={6} lg={4} justifyContent="center" alignItems="center">
                <Link href="/#/toys"><img src="/assets/Frame 12.png" className="img-fluid" style={{cursor: 'pointer'}}/></Link>
                </Grid>
                <Grid item container xs={12} md={6} lg={4} justifyContent="center" alignItems="center">
                <Link href="/#/toys"><img src="/assets/Frame 13.png" className="img-fluid" style={{cursor: 'pointer'}}/></Link>
                </Grid>                
            </Grid>

            <Grid container justifyContent="center" alignItems="center" className="mt-5 pt-4" style={{backgroundColor: '#5891FF', color: '#FFF'}}>
                <Grid item container xs={1} md={1}>
                    <h1>NOTE</h1>
                </Grid>
                <Grid item container xs={7} md={7}>
                    <p>Cancel Anytime: All our plans offer the flexibility to cancel your subscription whenever you want. For more detail, you can refer to our cancellation policy mentioned under terms and condition.</p>
                </Grid>
            </Grid>

            <Footer/>
            
        </div>
    )
}

export default Subscription;