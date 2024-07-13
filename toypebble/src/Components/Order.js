import { Grid } from "@mui/material";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

function Order() {
    return(
        <div>
            {/* <MyNavbar backgroundColor="rgb(255 242 150 / 57%)"/> */}
            <Grid item container xs={12} md={12}>
                <img src="/assets/Screenshot 2024-07-12 133911.png" className="Img-fluid" style={{width: '100%'}}/>
            </Grid>
            <Grid item container xs={12} md={12} className="mt-5">
            <h1 style={{paddingLeft: '100px'}}>My Orders</h1>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
                <Grid item container xs={10} md={10} className="mt-5" justifyContent="center" sx={{border: '2px solid #cacaca', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}} >
                    DEMO
                </Grid>
            </Grid>

            <Grid item container xs={12} md={12} justifyContent="center" alignItems="center" className="mt-5">
                <h1>Thank You for Your Order!</h1>
            </Grid>
            <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                <h1>Ready for Pickup!</h1>
            </Grid>

            <Footer/>
        </div>
    )
};

export default Order;