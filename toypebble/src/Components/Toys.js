import { Grid } from "@mui/material";
import MyNavbar from "./Navbar";


import './Toys.css';
import { Link } from "react-router-dom";

function Toys() {
    
    return(
        <div>
            <MyNavbar/>
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

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 23.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/0">
                                <img src="/assets/Frame 110.png" className="card-img-top" alt="..." />
                            </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/1">
                                <img src="/assets/Frame 111.png" className="card-img-top" alt="..." />
                            </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/2">
                                <img src="/assets/Frame 112.png" className="card-img-top" alt="..." />
                            </Link> 
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/3">
                                <img src="/assets/Frame 113.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/4">
                                <img src="/assets/Frame 114.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/5">
                                <img src="/assets/Frame 115.png" className="card-img-top" alt="..." />
                            </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/6">
                                <img src="/assets/Frame 116.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/7">
                                <img src="/assets/Frame 117.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/8">
                                <img src="/assets/Frame 118.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/9">
                                <img src="/assets/Frame 119.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/10">
                                <img src="/assets/Frame 120.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                            <Link to="/toysdetail/11">
                                <img src="/assets/Frame 121.png" className="card-img-top" alt="..." />
                            </Link>                                 
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 24.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls2" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/12">
                                    <img src="/assets/Component 18.png" className="card-img-top" alt="..." />
                                </Link>
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/13">
                                    <img src="/assets/Component 19.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/14">
                                    <img src="/assets/Component 20.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/15">
                                    <img src="/assets/Component 21.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/16">
                                    <img src="/assets/Component 22.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/17">
                                    <img src="/assets/Component 23.png" className="card-img-top" alt="..." />
                                </Link>                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/18">
                                    <img src="/assets/Component 24.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/19">
                                    <img src="/assets/Component 25.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/20">
                                    <img src="/assets/Component 26.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/21">
                                    <img src="/assets/Component 27.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/22">
                                    <img src="/assets/Component 28.png" className="card-img-top" alt="..." />
                                </Link>                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <Link to="/toysdetail/23">
                                    <img src="/assets/Component 29.png" className="card-img-top" alt="..." />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 25.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls3" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 43.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 44.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 45.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 46.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 47.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 48.png" className="card-img-top" alt="..." />
                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 49.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <img src="/assets/Component 50.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 51.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 52.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 53.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 54.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 26.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls4" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 68.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 69.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 70.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 71.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 72.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 73.png" className="card-img-top" alt="..." />
                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 74.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <img src="/assets/Component 75.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 27.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls5" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 93.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 94.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 95.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 96.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 97.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 98.png" className="card-img-top" alt="..." />
                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 99.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <img src="/assets/Component 100.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 101.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 102.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 103.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 104.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 28.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls6" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 119.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 120.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 121.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 122.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 123.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 124.png" className="card-img-top" alt="..." />
                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 125.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <img src="/assets/Component 126.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 127.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 128.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 129.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 130.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <Grid container  className="mt-5">
                <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <img src="/assets/Group 29.png" alt=""/>
                </Grid>                   
                
            </Grid>

            <div id="carouselExampleControls7" className="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 144.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 145.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 146.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 147.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 148.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 149.png" className="card-img-top" alt="..." />
                               
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 150.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card " style={{width: '17.5rem'}}>
                                <img src="/assets/Component 151.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 152.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 153.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 154.png" className="card-img-top" alt="..." />
                                
                            </div>
                            <div className="card" style={{width: '17.5rem'}}>
                                <img src="/assets/Component 155.png" className="card-img-top" alt="..." />
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls7" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls7" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
    
        </div>

    );
}




export default Toys;