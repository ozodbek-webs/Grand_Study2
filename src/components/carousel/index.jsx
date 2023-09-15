import React from 'react';
import teacherAzi from '../../assets/images/image.png';
import teacherAkmal from '../../assets/images/image (2).png';
import teacherAnna from '../../assets/images/image (1).png';
import './style.scss'
const Karusel = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='bg-warning mx-auto w-25 item'>
                            <img src={teacherAzi} alt="Teacher" className="mt-3 d-flex align-items-center mx-auto" />
                            <div className="d-md-block">
                                <h5 className="text-center">Aziza Rasulova</h5>
                                <p className="text-center mb-5">English teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='bg-warning mx-auto w-25 item'>
                            <img src={teacherAkmal} alt="Teacher" className="mt-3 d-flex align-items-center mx-auto" />
                            <div className="d-md-block">
                                <h5 className="text-center">Akmal Ilhomov</h5>
                                <p className="text-center mb-5">Literature teacher</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='bg-warning mx-auto w-25 item '>
                            <img src={teacherAnna} alt="Teacher" className="mt-3 d-flex align-items-center mx-auto" />
                            <div className="d-md-block">
                                <h5 className="text-center">Anna Rasulova</h5>
                                <p className="text-center mb-5">Physics teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rounded-pill bg-warning" aria-hidden="true"></span>
                    <span className="visually-hidden bg-warning">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon rounded-pill bg-warning" aria-hidden="true"></span>
                    <span className="visually-hidden bg-warning">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Karusel;