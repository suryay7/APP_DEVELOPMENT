import React from 'react'
import './contact.css'
import { FaRegCopyright } from "react-icons/fa6";
const Contact = () => {
    return (
        <div>
            <div className='root3'>
                <div>
                    <div style={{ fontSize: "135%", paddingTop: "3.5%", fontFamily: "sans-serif" }}>
                        <center><h1 style={{ color: "white"}}>We are here to help</h1></center>
                    </div>
                    <div style={{ fontSize: "185%", textAlign: "center", paddingTop: "2.5%", fontFamily: "sans-serif" }}>
                        <p style={{color:"white"}}> Have questions? At PET SPACE, we love talking to our clients. You can reach us via email, chat or phone</p>
                        <img src='/draw.jpg' style={{ paddingTop: "5%" }}></img>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#E6EEF7" }}>
                <div className="con">
                    <p>Here are our contact details:</p>
                </div>
            
            <div className="text">
                <h1 style={{ fontFamily: "sans-serif" }}>Office: Coimbatore</h1>
                {/* <h2 style={{ marginLeft: "3.5%", fontFamily: "sans-serif" }}>Coimbatore</h2> */}
                <center>

                <ul className='no'>
                    <li>PET SPACE LOCAL LTD</li>
                    <li>Sidhapudur</li>
                    <li>Gandhipuram</li>
                </ul>
                </center>
                {/* <h2 style={{ marginLeft: "3.5%", fontFamily: "sans-serif", paddingTop: "1.5%"  }}>Chennai</h2>
                <ul className='no'>
                    <li>PET SPACE Local LTD</li>
                    <li>Sidhapudur</li>
                    <li>Gandhipuram</li>
                </ul> */}
            </div>
            <div style={{ textAlign: "center", fontSize: "120%", fontFamily: "sans-serif" }}>
                <h1 style={{ fontFamily: "sans-serif" }}>Customer Service</h1>
            </div>
            <div style={{ textAlign: "center", fontSize: "135%", paddingTop: "2.5%", fontFamily: "sans-serif" , paddingBottom:"2.5%" }}>
                <p>
                    <h4 style={{ fontFamily: "sans-serif" }}>Support Time: 24 hours:Monday to Friday.</h4>
                    <h4 style={{ fontFamily: "sans-serif" }}>Saturday: 10 AM to 2 PM</h4>
                    <h3 style={{ fontSize: "140%", paddingTop: "1.5%", fontFamily: "sans-serif"  }}>Contact Number:</h3>
                    <h4>+91 6383997123</h4>
                    <h4>+91 9080870793</h4>
                </p>
            </div>
            </div>
            <div className="co">
        <p>
          Copyright 2023 <FaRegCopyright /> PET SPACE. All rights reserved{" "}
        </p>
      </div>
        </div>

    )
}

export default Contact