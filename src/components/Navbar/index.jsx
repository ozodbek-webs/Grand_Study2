import React from 'react';
import logo from '../../assets/images/gs_circle_logo.png';
import './style.scss'
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav className='navbar'>
                    <div className="df">
                    <div className="gold_circle"><img src={logo} className='logo' alt="GrandStudent" /></div>
                    <h1 className="logoText">Grand Student</h1>
                    </div>
                    <ul className="list">
                        <li className="items"><a className='link' href="#"><i className="bi bi-house"></i> Home</a></li>
                        <li className="items"><a className='link' href="#about"><i className="bi bi-info-circle"></i> About</a></li>
                        <li className="items"><a className='link' href="#"><i className="bi bi-chat-right-text"></i> News</a></li>
                        <li className="items NavTeach"><a className='link ' href="#hTeacher"><i className="bi bi-person-vcard"></i> Our Teachers</a></li>
                        <li className="items"><a className='link' href="#tle"><i className="bi bi-headset"></i> Contact</a></li>
                        <li className="items"><a className='link' href="#"><i class="bi bi-globe-central-south-asia"></i><select><option value="eng">ENG</option><option value="rus">RUS</option><option value="uzb">UZB</option></select></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;