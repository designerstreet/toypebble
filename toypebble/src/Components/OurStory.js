import { Grid } from "@mui/material";

import Footer from "./Footer";
import React from 'react';

function OurStory() {
    return(
        <div>
            {/* <MyNavbar/> */}

            <Grid className="pt-5 pb-5" item container sx={{backgroundColor: '#8769FF'}}>
                <Grid  item container sx={{backgroundColor: '#bb9ff9', marginRight: '25px', marginLeft: '25px'}} justifyContent="center" alignItems="center">
                    <Grid item container xs={12} md={4} >
                        <img className="img-fluid" src="/assets/Group 19.png"/>
                    </Grid>
                    <Grid item container xs={12} md={8}  justifyContent="center" alignItems="center" >
                        <h1 className="text-center"><span style={{color: '#FFF', fontSize: '50px', position: 'relative', bottom: '70px'}}>Our</span> &nbsp; <span style={{color: '#FFF067', fontSize: '150px', fontFamily: 'Atma'}}>Story</span></h1>

                        <p style={{color: '#FFF', paddingLeft: '15px', fontFamily: 'Atma'}}>Our story began with a pivotal moment in the life of our co-founder, Sakshi. As a new mom navigating the exciting yet chaotic journey of parenthood, Sakshi found herself facing a common challenge shared by many parents: toy clutter. With the arrival of her bundle of joy, Sakshi quickly realized that her home was becoming overrun by a vast assortment of toys, each vying for space and attention.</p>
                    </Grid>
                </Grid>

                <Grid className="mt-4"  item container sx={{backgroundColor: '#bb9ff9', marginRight: '25px', marginLeft: '25px'}} justifyContent="center" alignItems="center">
                    <Grid item container xs={12} md={8} sx={{color: '#FFF',  paddingLeft: '20px'}}>
                        <p style={{fontSize: '25px'}}>Determined to find a solution, Sakshi turned to her brother, Siddharth, for support. Together, they embarked on a mission to reimagine the way families approach playtime. Drawing from their own experiences and fueled by a shared passion for simplicity and sustainability, Sakshi and Siddharth joined forces to create <span style={{color: '#E30613'}}>Toy</span><span style={{color: '#4F4FD2'}}>Pebble</span>.</p>
                        <p style={{fontSize: '25px'}}>What started as a solution to a personal problem has since blossomed into a pursuit to redefine playtime for families. Together, Sakshi and Siddharth are on a mission to empower parents, inspire children, and create a future where every family can enjoy the benefits of play without the burden of toy clutter. Our toy rental service offers families a convenient, affordable, and sustainable way to enjoy a rotating selection of high-quality toys. From educational toys that spark curiosity to imaginative playsets that inspire creativity, our curated collection has something for every child's unique interest, and developmental stage.</p>
                        <p style={{fontSize: '25px'}}>With each ToyPebble box that arrives at your doorstep, you're not just receiving a bundle of toys—you're joining a movement. A movement towards a simpler, more sustainable way of living. A movement towards a world where every child has the opportunity to play, explore, and thrive.</p>
                    </Grid>
                    <Grid item container xs={12} md={4}  justifyContent="center" alignItems="center" >
                      <img src="/assets/WhatsApp Image 2024-06-14 at 14.11.20_0b1e1604 1.png"/>
                      <img src="/assets/Group 18.png"/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center">
                    <p style={{fontSize: '35px', fontWeight: '600'}}>Thank you for being a part of the ToyPebble journey.</p>
                </Grid>
                <Grid item container xs={12} md={12} justifyContent="center">
                    <p style={{fontSize: '35px', fontWeight: '600'}}> Together, let's make playtime unforgettable, one toy at a time.</p>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    <Grid item container xs={7} md={7} justifyContent="center">
                        <p style={{fontSize: '35px', color: '#4F4FD2'}}>Join us today and discover the joy of ToyPebble!</p>
                    </Grid>
                    <Grid item container xs={5} md={5} justifyContent="end">
                        <img src="/assets/storyImage.png"/> 
                    </Grid>
                </Grid>
            </Grid>

            <Footer/>
        </div>
    )
}

export default OurStory;