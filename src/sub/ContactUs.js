import React from 'react'
import './Contact.css'
import {GrLocation} from 'react-icons/gr';
import {BsTelephone} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <div
        style={
            {
                paddingLeft:"10%",
                paddingRight:"10%",
                paddingTop:"2%"
            }
        }
    >
        <div
            style={
                {
                    width:"100%",
                    position: "relative",
                }
            }
        >
            <img 
                src='https://www.w3schools.com/css/img_5terre_wide.jpg'

                style={
                    {
                        height:"auto",
                        maxWidth:"100%",
                    }
                }
            />
            <div
                style={
                    {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color:"white"
                    }
                }
            >
                <h1>
                    Contact Us
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dui luctus, malesuada ipsum non, auctor enim.
                </p>

            </div>
        </div>

        <div
            style={
                {
                    display:"flex",
                    width:"100%"
                }
            }
        >

            <div className="Contact">
            
                    <GrLocation style={{fontSize:"50px", margin:"20px"}}/>
                    <h3>Office Location</h3>
                    <p>
                        ERE Business Solution, cyberpark sahya building 2nd floor calicut. pin: 673008
                    </p>
                
            </div>

            <div className="Contact">
                
                    <BsTelephone style={{fontSize:"50px", margin:"20px"}} />
                    <h3>Discuss On Phone</h3>
                    <p>
                        +91 9876543210
                    </p>
                
            </div>

            <div className="Contact">
                
                    <FiMail style={{fontSize:"50px", margin:"20px"}} />
                    <h3>Send an Email</h3>
                    <p>
                        help@labhamhouse.com
                    </p>
                
            </div>

        </div>

        <div
            style={
                {
                    width:"100%",
                    display:"flex",
                    backgroundColor:"gray",
                }
            }
        >
            <div style={{width:"40%", padding:"40px"}}>
                <h3 style={{textAlign:"left", color:"red"}}>
                    Lorem ipsum dolor sit amet, ipsum dolor sit amet
                </h3>

                <h6 style={{textAlign:"left", color:"blue"}}>
                Just send us your query we will give you the help you need.
                </h6>
            </div>

            <div 
                style={
                    {
                        width:"60%", 
                        paddingTop:"20px", 
                        paddingLeft:"15%"
                    }
                }
            >
                <table>
                    <tr>
                        <td>
                            <Form.Control placeholder="First Name"/>
                        </td>
                        <td>
                            <Form.Control placeholder="Second Name"/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Form.Control placeholder="Email Address"/>
                        </td>
                        <td>
                            <Form.Control placeholder="Phone"/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <Form.Control placeholder="Message ...." 
                                style={{height:"80px"}}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td 
                            colSpan={2}
                            style={{textAlign:"right"}}>
                            <Button variant="danger">
                                Send message
                            </Button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>

    </div>
  )
}

export default ContactUs