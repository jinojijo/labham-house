import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import {IoPersonOutline} from 'react-icons/io5';
import {BsCartDash} from 'react-icons/bs';

import {Link} from 'react-router-dom';


function Header() {

  return (
    <div 
        style={
            {
                width:"100%",
                height:"50%",
                backgroundColor:"lightgray",
                display:"flex",
                flexDirection:"column"
            }
        }
    >
        
        
        <div
            style={
                {
                    width:"100%",
                    margin:"20px",
                    
                }
            }
        >
            <Stack direction="horizontal" gap={3}>
                <Link to="/homep"
                    style={{textDecoration: 'none'}}
                >
                    <h2 style={{color:"red", marginLeft:"20%"}}>
                        LABHAM HOUSE
                    </h2>
                </Link>
                
                <Form.Control placeholder="Search Essentials and More ..." 
                    style={{width:"40%", marginLeft:"10%"}}
                />
                <Link to="/sign">
                    <Button variant="light">
                        <IoPersonOutline style={{color:"red", margin:"5px"}} />
                        Sign Up / Sign In
                    </Button>
                </Link>
                <div className="vr" />

                <Link to="/cart">
                    <Button variant="light"> 
                        <BsCartDash style={{color:"red", margin:"5px"}} />
                        Cart
                    </Button>
                </Link>
            </Stack>
            
        </div>

        <div style={{margin:"25px"}}>
            <table style={{width:"80%",marginLeft:"10%", textAlign:"center"}}>                            
                <tr>
                    <td style={{width:"15%"}}>
                        <Link to="/homep"
                            style={{textDecoration: 'none', color:"black"}}
                        >
                            Home
                        </Link>
                    </td>
                    <td style={{width:"15%"}}>
                        <Link to="/product"
                            style={{textDecoration: 'none', color:"black"}}
                        >
                            Products
                        </Link>
                    </td>
                    <td style={{width:"15%"}}>
                        <Link to="/about"
                            style={{textDecoration: 'none', color:"black"}}
                        >
                            About
                        </Link>
                    </td>
                    <td style={{width:"15%"}}>Blog</td>
                    <td style={{width:"15%"}}>
                        <Link to="/cts"
                            style={{textDecoration: 'none', color:"black"}}
                        >
                            Contact Us
                        </Link>
                    </td>
                </tr>
            </table>

        </div>   
    </div>
  )
}

export default Header