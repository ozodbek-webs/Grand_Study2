import React from 'react';
import imgPhy from '../../assets/images/Vector.png';
import imgLi from '../../assets/images/book-svgrepo-com 1.png';
import imgEn from '../../assets/images/english-svgrepo-com 1.png';
import imgMath from '../../assets/images/math-finance-svgrepo-com 1.png';
import './style.scss'
import Korusel from './karusel';
const Courses = () => {
    return (
        <div className="courseComponent">
            <Korusel />
            {/* <h1>Our courses</h1>
            <div className="container">
                <div className="course">
                    <div className="courseItem">
                        <img src={imgPhy} alt="Physics" />
                        <h3>Physics</h3>
                    </div>
                    <div className="courseItem">
                        <img src={imgLi} alt="Physics" />
                        <h3>Literature</h3>
                    </div>
                    <div className="courseItem">
                        <img src={imgEn} alt="Physics" />
                        <h3>English</h3>
                    </div>
                    <div className="courseItem">
                        <img src={imgMath} alt="Physics" />
                        <h3>Math</h3>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Courses;