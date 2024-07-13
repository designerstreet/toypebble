import { Grid } from "@mui/material";
import MyNavbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ageGroup = searchParams.get('ageGroup');
  const plan = searchParams.get('plan');

  return (
    <div>
      {/* <MyNavbar/> */}

      <Grid item container xs={12} md={12}>
        <h1>Ready to Checkout</h1>
      </Grid>
      <Grid item container xs={12} md={12}>
        <p>Subscription Plan: {plan}</p>
      </Grid>
      <Grid item container xs={12} md={12}>
        <p>Age Group: {ageGroup}</p>
      </Grid>

    </div>
  )
}

export default Checkout;
