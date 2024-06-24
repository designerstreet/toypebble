import MyNavbar from "./Navbar";
import './Landing.css';
import React from 'react';
import MyCard from "./Card";
import {Grid, Link} from "@mui/material";


function Landing() {
    return (
        <div className="landing">
            <MyNavbar/>
            <div className="banner-container">
                <img src="/assets/banner.png" className="img-fluid" alt="Banner" />
            </div>

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/8431 1.png" className="img-fluid" style={{width: '100%'}}/>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{fontFamily: 'Atma', fontSize: '50px', paddingRight: '7px', paddingTop: '15px', fontWeight: '800'}}>Are you tired of toy clutter taking over your home?</h1>
                        <p style={{ fontFamily: 'Atma', paddingTop: '30px', fontSize: '25px', paddingRight: '170px'}}>We've been there too. As a brother and sister duo, we understand firsthand the overwhelming challenge of managing a mountain of toys, especially after welcoming a new addition to the family.</p>
                        <p style={{ fontFamily: 'Atma', paddingTop: '30px', fontSize: '25px', paddingRight: '170px'}}>That's why we founded <span style={{color: 'red'}}>Toy</span><span style={{color: 'blue'}}>Pebble</span> Toy Rental—to make playtime easier, more affordable, and way less cluttered!</p>
                        <div className="row" style={{border: '1px solid #B8D0FF', backgroundColor: '#B8D0FF', padding: '15px', position: 'relative', right: '130px'}}>
                            <div className="col-md-9">
                                <p style={{color: '#000', fontFamily: 'Atma', fontSize: '18px'}}>ToyPebble offers a simple, hassle-free way to keep your home clutter-free while ensuring your child has access to a world of fun and imagination. With our convenient rental plans, you can say goodbye to toy overload and hello to endless playtime adventures.</p>
                            </div>
                            <div className="col-md-3">
                                <img src="/assets/Group.png" className="img-fluid"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h1 className="text-center" style={{fontFamily: 'Atma', fontWeight: '700'}}>Why our Toy Rental Subscription is a total game-changer!</h1>
            </div>


            <Grid container  justifyContent="center" alignItems="center"  direction="row" className="mt-5">
                <Grid item xs={6} md={3} lg={4} container justifyContent="center" alignItems="center" >
                    <MyCard
                        imgSrc="/assets/Pyramid.png"
                        title="Dive into a World of Variety"
                        text="Imagine having access to a treasure trove of toys at your fingertips. From action-packed playsets to brain-boosting puzzles, our collection has something for every child's wildest dreams. With new toys added regularly, the fun never stops!"
                    />
                </Grid>
                <Grid item xs={6} md={3} lg={4} container justifyContent="center" alignItems="center" >
                    <MyCard
                        imgSrc="/assets/Piggy.png"
                        title="Budget-Friendly Fun"
                        text="Who says playtime has to break the bank? With ToyPebble, you can enjoy all the benefits of a constantly rotating toy collection without emptying your wallet. Our subscription plans are designed to fit every budget, so you can save money while keeping your little one entertained"
                    />
                </Grid>
                <Grid item xs={6} md={3} lg={4} container justifyContent="center" alignItems="center" >
                    <MyCard
                        imgSrc="/assets/Abc Blocks.png"
                        title="Bye-Bye, Toy Clutter"
                        text="Say farewell to the days of tripping over toy cars and stepping on LEGO bricks! Our rental service lets you enjoy the magic of playtime without sacrificing precious space in your home. When your child is done playing, simply return the toys and watch as your living room transforms into a clutter-free oasis."
                    />
                </Grid>
                <Grid item xs={6} md={4} container justifyContent="center" alignItems="center" >
                    <MyCard
                        imgSrc="/assets/Piggy.png"
                        title="Budget-Friendly Fun"
                        text="Who says playtime has to break the bank? With ToyPebble, you can enjoy all the benefits of a constantly rotating toy collection without emptying your wallet. Our subscription plans are designed to fit every budget, so you can save money while keeping your little one entertained"
                    />
                </Grid>
                <Grid item xs={6} md={4} container justifyContent="center" alignItems="center" >
                    <MyCard
                        imgSrc="/assets/Abc Blocks.png"
                        title="Bye-Bye, Toy Clutter"
                        text="Say farewell to the days of tripping over toy cars and stepping on LEGO bricks! Our rental service lets you enjoy the magic of playtime without sacrificing precious space in your home. When your child is done playing, simply return the toys and watch as your living room transforms into a clutter-free oasis."
                    />
                </Grid>
            </Grid>


            <div style={{border: '1px solid #EDC137', backgroundColor: '#FFECBB'}} className="mt-4">
            <Grid container direction="row" className="mt-5">
                <Grid item container xs={8} md={8} sx={{ paddingLeft: { xs: '0', md: '150px' } }}>
                    <h4 style={{paddingRight: '100px', fontSize: '40px', color: '#FF5C7B'}}>Ready to join the ToyPebble revolution?</h4>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center" xs={4} md={4}>
                    <img src="/assets/Group (2).png"/>
                </Grid>

            </Grid>
            <Grid container direction="row" className="mt-3">
                <Grid item container xs={8} md={8} sx={{ paddingLeft: { xs: '0', md: '150px' } }}>
                    <p style={{fontSize: '22px', fontWeight: '500' }}>Sign up for our Toy Rental Subscription today and unlock a world of endless playtime possibilities. <br></br>Let's make playtime unforgettable, one toy at a time!</p>
                </Grid>
                <Grid item container xs={4} md={4} justifyContent="end" alignItems="end">
                    <img src="/assets/Group (1).png"/>
                </Grid>

            </Grid>
            </div>

            <Grid container justifyContent="center" alignItems="center" className="mt-5">
                <Link href="/#/subscription" sx={{textDecoration: 'none'}}>
                <h1 className="text-center" style={{border: '1px solid #84DAFF', backgroundColor: '#84DAFF', color: '#000', borderRadius: '12px', padding: '10px 40px 10px 40px'}}>Checkout Our Subscription Plans</h1>
                </Link>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" className="mt-5">
                <h1 className="text-center" style={{fontWeight: '700'}}>How ToyPebble works?</h1>
            </Grid>

            <Grid container justifyContent="Center" alignItems="center" direction="row">
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={10}
                    md={4}
                    className="mx-2 my-2"
                    sx={{ border: '1px solid #000' }}
                >
                    <div style={{ textAlign: 'center' }}>
                    <img src="/assets/Browse and select.png" className="img-fluid pt-3" style={{ height: '200px', width: '300px' }} />
                    <h6 className="text-center pt-2" style={{fontSize: '35px', color: '#FFD027'}}>Browse & Choose</h6>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={10}
                    md={4}
                    className="mx-2 my-2"
                    sx={{ border: '1px solid #000' }}
                >
                    <div style={{ textAlign: 'center' }}>
                    <img src="/assets/Select plan.png" className="img-fluid pt-3" style={{ height: '200px', width: '300px' }} />
                    <h6 className="text-center pt-2" style={{fontSize: '35px', color: '#FFD027'}}>Select Your Plan</h6>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={10}
                    md={4}
                    className="mx-2 my-2"
                    sx={{ border: '1px solid #000' }}
                >
                    <div style={{ textAlign: 'center' }}>
                    <img src="/assets/Enjoy and explore.png" className="img-fluid pt-3" style={{ height: '200px', width: '300px' }} />
                    <h6 className="text-center pt-2" style={{fontSize: '35px', color: '#FFD027'}}>Enjoy & Explore</h6>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={10}
                    md={4}
                    className="mx-2 my-2"
                    sx={{ border: '1px solid #000' }}
                >
                    <div style={{ textAlign: 'center' }}>
                    <img src="/assets/Return and refresh.png" className="img-fluid pt-3" style={{ height: '200px', width: '300px' }} />
                    <h6 className="text-center pt-2" style={{fontSize: '35px', color: '#FFD027'}}>Return & Refresh</h6>
                    </div>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item container xs={8} md={8} className="pl-5" sx={{backgroundColor: '#2143BC'}}>
                    <div>
                        <p style={{color: '#FFF', fontSize: '35px', paddingLeft: '40px'}}>With ToyPebble, the possibilities are endless, and the clutter is non-existent. </p>
                        <p className="pt-3" style={{color: '#EFF32C', paddingLeft: '40px', fontSize: '35px'}}>Join our toy-loving community today and discover a simpler, more sustainable way to play! </p>
                        <p className="pt-3" style={{color: '#FFF', paddingLeft: '40px', fontSize: '35px'}}>Ready to dive in? Let's make playtime memorable together! Browse our collection and choose your plan now.</p>
                    </div>
                </Grid>
                <Grid item container xs={4} md={4}>
                    <img src="/assets/Screenshot 2024-06-20 104914.png" style={{height: '400px', width: '100%'}} className="img-fluid"/>
                </Grid>
            </Grid>

            <Grid container className="mt-5">
                <Grid item container xs={2} md={2}  alignItems="end">
                    <img src="/assets/Group (3).png" className="img-fluid" style={{height: '80px'}}/>
                </Grid>
                <Grid item container xs={8} md={8} >
                    <div>
                        <h1 style={{color: '#4DCC10'}}>CleanPlay Assurance: Our Toy Sanitization Process</h1>
                        <p className="pt-2" style={{fontSize: '22px'}}>At ToyPebble, the health and safety of your family are our top priorities. That's why we've developed our CleanPlay Assurance program to ensure that every toy in our collection is meticulously sanitized and safe for your child's playtime adventures. </p>
                        <p style={{fontSize: '22px'}}>With our commitment to cleanliness and hygiene, you can trust ToyPebble to deliver toys that are not only fun and engaging but also thoroughly sanitized for your peace of mind.</p>
                    </div>
                </Grid>
                <Grid item container xs={2} md={2} justifyContent="end">
                    <img src="/assets/Group (4).png" className="img-fluid" style={{height: '60px'}}/>

                </Grid>
            </Grid>

            <Grid container sx={{backgroundColor: '#E0FFDD'}} justifyContent="center">
                <h1 className="pt-5" style={{fontWeight: '600', color: '#4DCC10'}}>how we keep our toys squeaky clean and germ-free:</h1>
                <Grid container direction="row" className="mt-5" justifyContent="center" >
                    <Grid item container xs={12} md={3} className="mx-1 my-2" >
                        <Grid container direction="row">
                            <Grid item container xs={2} md={2} className="mx-1">
                                <img src="/assets/delivery tracking.png" className="img-fluid" style={{height: '60px'}}/>
                            </Grid>
                            <Grid item container xs={9} md={9}>
                                <div>
                                    <h6 style={{fontSize: '22px', color: '#1F7FC5'}}>Through Inspection</h6>
                                    <p style={{fontSize: '14px'}}>Before any toy enters our inventory, it undergoes a thorough inspection to ensure that it meets our quality standards. We carefully examine each toy for signs of wear and tear, ensuring that only the safest and most durable toys make it into your hands.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3} className="mx-1 my-2" >
                        <Grid container direction="row">
                            <Grid item container xs={2} md={2} className="mx-1">
                                <img src="/assets/Protect Plant.png" className="img-fluid" style={{height: '60px'}}/>
                            </Grid>
                            <Grid item container xs={9} md={9}>
                                <div>
                                    <h6 style={{fontSize: '22px', color: '#1F7FC5'}}>Eco-Friendly Cleaning Products</h6>
                                    <p style={{fontSize: '14px'}}>We use only eco-friendly, non-toxic cleaning products that are safe for children and the environment. Our cleaning solutions effectively remove dirt, grime, and germs without leaving behind any harmful residues.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3} className="mx-1 my-2" >
                        <Grid container direction="row">
                            <Grid item container xs={2} md={2} className="mx-1">
                                <img src="/assets/Clean.png" className="img-fluid" style={{height: '60px'}}/>
                            </Grid>
                            <Grid item container xs={9} md={9}>
                                <div>
                                    <h6 style={{fontSize: '22px', color: '#1F7FC5'}}>Multi-Step Cleaning Process</h6>
                                    <p style={{fontSize: '14px'}}>Each toy is cleaned using a multi-step process that includes washing, disinfecting, and air drying. Our team follows strict hygiene protocols to prevent cross-contamination and ensure that every toy is thoroughly sanitized.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3} className="mx-1 my-2" >
                        <Grid container direction="row">
                            <Grid item container xs={2} md={2} className="mx-1">
                                <img src="/assets/Uv Protection.png" className="img-fluid" style={{height: '60px'}}/>
                            </Grid>
                            <Grid item container xs={9} md={9}>
                                <div>
                                    <h6 style={{fontSize: '22px', color: '#1F7FC5'}}>UV-C Sterilization</h6>
                                    <p style={{fontSize: '14px'}}>In addition to traditional cleaning methods, we utilize UV-C sterilization technology to eliminate harmful bacteria and viruses. UV-C light effectively destroys microorganisms at the molecular level, providing an extra layer of protection for your peace of mind.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3} className="mx-1 my-2" >
                        <Grid container direction="row">
                            <Grid item container xs={2} md={2} className="mx-1">
                                <img src="/assets/good quality medal.png" className="img-fluid" style={{height: '60px'}}/>
                            </Grid>
                            <Grid item container xs={9} md={9}>
                                <div>
                                    <h6 style={{fontSize: '22px', color: '#1F7FC5'}}>Quality Assurance</h6>
                                    <p style={{fontSize: '14px'}}>Once the sanitization process is complete, each toy undergoes a final quality assurance check to ensure that it meets our standards for cleanliness and safety. We take pride in delivering toys that are not only fun and engaging but also safe and hygienic for your family to enjoy.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{backgroundColor: '#FFEDB4'}} justifyContent="center">
                <Grid item container xs={10} md={10} alignItems="center" justifyContent="center" style={{paddingTop: '25px'}}>
                    <h2 style={{color: '#138834', fontSize: '36px'}}>At ToyPebble, we're committed to providing you with a worry-free playtime experience.</h2>
                </Grid>
                <Grid item container xs={10} md={10} alignItems="center" justifyContent="center">
                    <p style={{fontSize: '22px'}}>Our comprehensive toy sanitization process ensures that every toy is thoroughly cleaned and sanitized before it reaches your home, so you can focus on making memories with your little ones without any concerns about cleanliness or hygiene.</p>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default Landing;