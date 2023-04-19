import React from 'react'

import {BsWhatsapp, BsTelephone} from 'react-icons/bs';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div style={{backgroundColor:"lightgray"}}>

        <div
            style={
                {
                    width:"100%",
                    display:"flex",
                }
            }
        >
            <div
                style={
                    {
                        paddingTop:"5%",
                        marginLeft:"10%",
                        width:"40%"
                    }
                }
            >
                <h1>
                    <b>
                        <Link to="/homep"
                            style={{textDecoration: 'none', color:"red"}}
                        >
                            LABHAM HOUSE
                        </Link>
                    </b>
                </h1>
                
                <div style={{margin:"7%"}}>
                    <h6>
                        Contact Us
                    </h6>

                    <div style={{display:"flex",padding:"7%"}}>
                        <BsWhatsapp style={{fontSize:"30px", margin:"10px"}}/>
                        <div>
                            Whatsapp
                            <br/>
                            +1 202-918-2132
                        </div>
                    </div>
                    
                    <div style={{display:"flex",padding:"7%"}}>
                        <BsTelephone style={{fontSize:"30px", margin:"10px"}}/>
                        <div>
                            Call Us 
                            <br/>
                            +1 202-918-2132
                        </div>
                    </div>     
                </div>   
            </div>

            <div style={
                {
                    display:"flex",
                    paddingTop:"8%",
                    width:"60%"
                }
            }>
                <div style={
                    {
                        marginLeft:"7%",
                        width:"30%"
                    }
                }
                > 
                    <h6>
                        <Link to="/product"
                            style={{textDecoration: 'none', color:"black"}}
                        >
                            Most Popular Categories
                        </Link>
                    </h6>

                    <hr
                        style={
                            {
                                width:"85%",
                                border: "1px solid gray"
                            }
                        }
                    />

                    <ul>
                        <li>Titles</li>
                        <li>Pipes</li>
                        <li>Bathroom Fittings</li>
                        <li>Lights</li>
                        <li>Switch Boards</li>
                        <li>Wood Flooring</li>
                        <li>Wires</li>
                    </ul>
                </div>

                <div style={
                    {
                        marginLeft:"7%",
                        width:"30%"
                    }
                }
                >
                    <h6>Customer Services</h6>

                    <hr
                        style={
                            {
                                width:"85%",
                                border: "1px solid gray"
                            }
                        }
                    />

                    <ul>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>E- Waste Policy</li>
                        <li>Cancellation & Return</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr style={
                {
                    width:"85%",
                    border: "1px solid gray"
                }
            }
        />

            <center>
                <AiOutlineCopyrightCircle style={{fontSize:"20px", marginRight:"5px"}}/> 
                <b>2022 All Rights Reserved. ERE BUSINESS SOLUTIONS</b>
            </center>

    </div>
  )
}

export default Footer