import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === 'localhost';

const planMapping = {
  '3-month': 'basic',
  '6-month': 'standard',
  '12-month': 'premium'
};

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const ageGroup = searchParams.get('ageGroup');
  const plan = searchParams.get('plan');
  
  const [amount, setAmount] = useState(0);
  const [gst, setGst] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const email = storedUser.email || '';
  const name = storedUser.parentname || '';

  useEffect(() => {
    // Fetch the amount based on the plan type
    async function fetchAmount() {
      const planType = planMapping[plan];
      if (planType) {
        const data = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/planamount`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ planType })
        }).then((t) => t.json());

        const fetchedAmount = data.amount / 100; // Assuming the backend returns amount in paise
        const gstAmount = fetchedAmount * 0.18;
        const total = fetchedAmount + gstAmount;

        setAmount(fetchedAmount);
        setGst(gstAmount);
        setTotalAmount(total);
      }
    }
    fetchAmount();
  }, [plan]);

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const planType = planMapping[plan];

    if (!planType) {
      alert('Invalid subscription plan.');
      return;
    }

    const data = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/razorpay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ planType })
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? process.env.KEY_TEST_ID : process.env.KEY_LIVE_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Toypebble',
      description: 'Thank you for your purchase.',
      handler: async function (response) {
        await createOrder(response.razorpay_order_id, plan, ageGroup);
        await sendOrderEmail(response.razorpay_order_id); // Call to send email after creating order

        // Navigate to the order page with order details
        navigate('/myOrders');
      },
      prefill: {
        name,
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999'
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function createOrder(orderId, plan, ageGroup) {
    const token = JSON.parse(localStorage.getItem('token')) || '';
    const orderData = {
      orderId,
      orderDate: new Date().toISOString(),
      plan,
      ageGroup
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Order placed successfully:', data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

  async function sendOrderEmail(orderId) {
    const token = JSON.parse(localStorage.getItem('token')) || '';
    const emailData = {
      orderId,
      plan,
      ageGroup,
      name,
      email // Using actual user's email from context
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/sendOrderEmail`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Email sent successfully:', data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <div>
       <Grid container className="pt-4" style={{backgroundColor: '#FFF8BD'}}>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 25.png" alt="" style={{height: '160px'}}/>
                </Grid>
                <Grid item container xs={6} md={6} justifyContent="center" alignItems="center">
                    <div className="text-center">
                        <h4 style={{fontSize: '2.1rem', color: '#4A66C9', fontWeight: '600'}}>Unlock a World of Play!</h4>
                        <p style={{fontSize: '2.6rem', color: '#000', fontWeight: '500'}}>Explore, Learn, and Grow with Our <br></br> Curated Toy Collection.</p>
                    </div>
                </Grid>
                <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
                    <img src="/assets/image 26.png" alt="" style={{height: '160px'}}/>
                </Grid>
            </Grid>
      {/* <Container maxWidth="md" style={{ marginTop: '50px', backgroundColor: '#FFF8BD' }}> */}
      <Grid item container md={12} xs={12} justifyContent="center" className="mt-5 mb-5">
        <Card container style={{backgroundColor: 'rgb(182 196 245)'}}>
          <CardContent>
            <Typography variant="h4" gutterBottom className="text-center" style={{fontWeight: '700'}}>
              Ready to Checkout
            </Typography>
            <hr></hr>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" style={{fontWeight: '500'}}>Subscription Plan:</Typography>
                <Typography variant="h6">{plan}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" style={{fontWeight: '500'}}>Age Group:</Typography>
                <Typography variant="h6">{ageGroup}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" style={{fontWeight: '500'}}>Amount:</Typography>
                <Typography variant="h6">₹{amount}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" style={{fontWeight: '500'}}>GST (18%):</Typography>
                <Typography variant="h6">₹{gst.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" style={{fontWeight: '500'}}>Total Amount:</Typography>
                <Typography variant="h6">₹{totalAmount.toFixed(2)}</Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
              <Button variant="contained" color="primary" fullWidth onClick={displayRazorpay} sx={{backgroundColor: '#537ea9', fontSize: '20px'}}>
                Pay
              </Button>
            </Grid>
          </CardContent>
        </Card>
        </Grid>
      {/* </Container> */}
    </div>
  );
}

export default Checkout;
