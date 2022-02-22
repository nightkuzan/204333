import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink"
import NavDropdown from "react-bootstrap/NavDropdown"
import styles from './css/styles.css'
import {BrowserRouter,Link, Route, Routes} from "react-router-dom";
function HomePage(){
    return (
       <>
       <div className="BGCAR">
        <div className="navbar">
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Car Parking</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h1 className="mx-auto my-0 text-uppercase text-black text123 ">car park</h1>
                    <h2 className=" mx-auto mt-2 mb-5 text12">เปิดมุมมองแปลกใหม่สำหรับการจอดรถ<br></br> พบกับประสบการณ์ใหม่ที่คุณไม่เคยเจอ
                    </h2>
                    <button className="btnset" ><Link  to="/parkingcar">Booking</Link></button>

                </div>
            </div>
        </div>
    </header> 

    <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8">
                    <h2 className="text-black mb-4">CS Parking</h2>
                    <h5 className="text-white">ค้นหาและจองผ่านเว็ปไซต์ที่จอดรถผ่านเว็ปไซต์ CS Parking เพียงกดจองแล้วขับรถไปรับประสบการณ์การจอดที่ “แปลกใหม่” ได้ทันที</h5>
                </div>
            </div>
        </div>
    </section> 

    <section id="contact" className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                        <div className="card-body text-center">
                            <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                            <h4 className="text-uppercase m-0">Address</h4>
                            <hr className="my-4 mx-auto" />
                            <div className="text-black-50">Chiang Mai University</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                        <div className="card-body text-center">
                            <i className="fas fa-envelope text-primary mb-2"></i>
                            <h4 className="text-uppercase m-0">Email</h4>
                            <hr className="my-4 mx-auto" />
                            <div className="small text-black-50"><a href="#!">chotongza@gmail.com</a></div>
                            <div className="small text-black-50"><a href="#!">nxne2307@gmail.com</a></div>
                            <div className="small text-black-50"><a href="#!">aekkarit12@gmail.com</a></div>
                            <div className="small text-black-50"><a href="#!">stamplolku@gmail.com</a></div>
                            <div className="small text-black-50"><a href="#!">sunnytulkorn@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card py-4 h-100">
                        <div className="card-body text-center">
                            <i className="fas fa-mobile-alt text-primary mb-2"></i>
                            <h4 className="text-uppercase m-0">Phone</h4>
                            <hr className="my-4 mx-auto" />
                            <div className="small text-black-50">080-516-9599</div>
                            <div className="small text-black-50">080-501-0008</div>
                            <div className="small text-black-50">099-763-9705</div>
                            <div className="small text-black-50">098-658-1545</div>
                            <div className="small text-black-50">062-291-0701</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social d-flex justify-content-center">
                <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="mx-2" href="https://web.facebook.com/ratsameetip.wita"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
            </div>
        </div>
    </section>
    <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">Copyright &copy; CarParking 2022</div>
    </footer>  
    </div>            
    </>
    )
}

export default HomePage;