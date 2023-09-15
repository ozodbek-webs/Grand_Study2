import React from 'react';
import img from '../../assets/images/Sc.png';
import './style.scss'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="df">
                    <div className="left">
                        <h2 className='logo'>GrandStudent</h2>
                        <p className='text'>Best course in the Uzbekistan
                            right now register and learn best
                            knowledges</p>
                        <h4 className='logo'>Email</h4>
                        <p className='text'>grandstudent@gmail.com</p>
                        <h4 className='logo' id="tle">Phone</h4>
                        <p className='text'>+998(91)123-45-67</p>
                    </div>
                    <div className="right">
                        <div className="dir">
                            <h4>Direction</h4>
                            <img src={img} alt="location" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;