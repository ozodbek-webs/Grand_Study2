import React from 'react';
import imgBoy from '../../assets/images/card.png';
import './style.scss'
const Header = () => {
    function hidden() {
        const modal = document.querySelector(".modale")
        modal.classList.remove('hidden')
    }
    function show() {
        const modal = document.querySelector(".modale")
        modal.classList.add('hidden')
    }
    return (
        <>
            <div className="topMain">
                <div className="container">
                    <div className="df">
                        <div className="topLeft">
                            <h1>Get best knowledges with us!</h1>
                            <p>Get best knowledges with us!
                                PowerMetrics is a lightweight BI tool that helps you explore and share the right insights at the right time.</p>
                            <button className="register" onClick={() => {
                                hidden()
                            }}>Register to our course</button>
                        </div>
                        <div className="topRight">
                            <img src={imgBoy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modale hidden">
                <button className="close" onClick={() => {
                    show()
                }}><i className="bi bi-x-lg"></i></button>
                <input className="in" type="text" placeholder="Your Name" onChange={(e) => {
                    const name = document.querySelector(".Name")
                    name.innerHTML = `Name : ${e.target.value}`
                }} />
                <input className="in" type="text" placeholder="Your Surname"
                    onChange={(e) => {
                        const name = document.querySelector(".SurName")
                        name.innerHTML = `Surname : ${e.target.value}`
                    }} />
                <input className="in" type="text" placeholder="Your Phone"
                    onChange={(e) => {
                        const name = document.querySelector(".phone")
                        name.innerHTML = `Phone : ${e.target.value}`
                    }} />
                <input className="in" type="text" placeholder="Your Chosen Course"
                    onChange={(e) => {
                        const name = document.querySelector(".course")
                        name.innerHTML = `Course : ${e.target.value}`
                    }} />
                <button className="send" onClick={()=>{
                    const modal = document.querySelector(".release")
                    modal.classList.remove('hidden')
                    show()
                }}>Send</button>
            </div>
            <div className="release modale hidden">
                <button className="close" onClick={() => {
                    const modal = document.querySelector(".release")
                    modal.classList.add('hidden')
                    hidden()
                }}><i className="bi bi-x-lg"></i></button>
                <h2 className="Name"></h2>
                <h2 className="SurName"></h2>
                <h2 className="phone"></h2>
                <h2 className="course"></h2>
                <button className="send"  onClick={()=>{
                    const modal = document.querySelector(".release")
                    modal.classList.add('hidden')
                    const input = document.querySelectorAll(".in")
                    console.log(input);
                    input[0].value=''
                    input[1].value=''
                    input[2].value=''
                    input[3].value=''
                }}>OK</button>
            </div>
        </>
    );
};

export default Header;