import React, { useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useAuth } from '../AuthContext'; // Import your AuthContext
import Footer from './Footer';
import './Order.css';
import { useTheme } from '@mui/material/styles';

function Order() {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  // Ensure token is available
  const token = JSON.parse(localStorage.getItem('token')) || '';
  console.log('Token from localStorage:', token);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isAuthenticated) {
        setError('Not authenticated. Please log in.');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/orders`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (response.status === 401) {
          console.error('Token expired or unauthorized. Redirecting to login...');
          setError('Unauthorized. Please log in.');
          return;
        }

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.orders && data.orders.length > 0) {
          setOrders(data.orders);
        } else {
          console.log('No orders found');
          setOrders([]);
        }
      } catch (error) {
        console.error('Error fetching order data:', error);
        setError('Failed to fetch order data.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated, token]);

  return (
    <div>
      <Grid item container xs={12} md={12}>
        <img src="/assets/Screenshot 2024-07-12 133911.png" className="Img-fluid" style={{ width: '100%' }} alt="Order Banner"/>
      </Grid>
      <Grid item container xs={12} md={12} className="mt-5">
        <Typography variant="h4" style={{ paddingLeft: '100px' }}>My Orders</Typography>
      </Grid>
      <Grid item container justifyContent="center" alignItems="center">
        <Grid item container xs={10} md={10} className="mt-5" justifyContent="center" sx={{ border: '2px solid #cacaca', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead sx={{ backgroundColor: 'rgb(182 196 245)' }}>
                <TableRow>
                  <TableCell sx={{ fontSize: isSmallScreen ? '10px' : '22px' }}>ORDER ID</TableCell>
                  <TableCell sx={{ fontSize: isSmallScreen ? '10px' : '22px' }}>ORDER DATE</TableCell>
                  <TableCell sx={{ fontSize: isSmallScreen ? '10px' : '22px' }}>SUBSCRIPTION PLAN</TableCell>
                  <TableCell sx={{ fontSize: isSmallScreen ? '10px' : '22px' }}>AGE GROUP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      <Typography color="error">{error}</Typography>
                    </TableCell>
                  </TableRow>
                ) : orders.length > 0 ? (
                  orders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontSize: isSmallScreen ? '8px' : '16px' }}>{order.orderId}</TableCell>
                      <TableCell sx={{ fontSize: isSmallScreen ? '8px' : '16px' }}>{order.orderDate}</TableCell>
                      <TableCell sx={{ fontSize: isSmallScreen ? '8px' : '16px' }}>{order.plan}</TableCell>
                      <TableCell sx={{ fontSize: isSmallScreen ? '8px' : '16px' }}>{order.ageGroup}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">No orders found.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid item container xs={12} md={12} justifyContent="center" alignItems="center" className="mt-5">
        <Typography variant="h3">Thank You for Your Order!</Typography>
      </Grid>
      <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
        <Typography variant="h3">Ready for Pickup!</Typography>
      </Grid>

      <Footer />
    </div>
  );
}

export default Order;
