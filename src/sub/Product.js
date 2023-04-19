import React from 'react'

import {AiOutlineStar} from 'react-icons/ai';
import {GoVerified} from 'react-icons/go';


import Dropdown from 'react-bootstrap/Dropdown';

function Product() {

    const mostPopArray=[
        {Name:"Zeon Light", 
            Size:"250x375mm", Price:"15200", Rating:"4.3", Review:"145", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq42UVU3ljspME0A76VfMKAKOZeqsHwXHtw&usqp=CAU"},
        {Name:"Wires", 
            Size:"250x375mm", Price:"15200", Rating:"4.7", Review:"45", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr15bhVZtnd0mG0JKIS6jsZUhAeKwEFDmgQ&usqp=CAU"},
        {Name:"T Pipes", 
            Size:"250x375mm", Price:"15200", Rating:"4.8", Review:"56", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDE1YTiA5l9zOUaKT697IAL-MkrBpwnVBlQQ&usqp=CAU"},
        {Name:"Woodland Teak Plus", 
            Size:"250x375mm", Price:"15200", Rating:"3", Review:"90", 
            Image:"https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wash Basin", 
            Size:"250x375mm", Price:"15200", Rating:"3.3", Review:"106", 
            Image:"https://images.pexels.com/photos/7893133/pexels-photo-7893133.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Lights", 
            Size:"250x375mm", Price:"15200", Rating:"4.3", Review:"45", 
            Image:"https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Bathroom Fittings", 
            Size:"250x375mm", Price:"15200", Rating:"4.8", Review:"80", 
            Image:"https://images.pexels.com/photos/6781117/pexels-photo-6781117.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wood Tiles", 
            Size:"250x375mm", Price:"15200", Rating:"4.6", Review:"86", 
            Image:"https://images.pexels.com/photos/5564625/pexels-photo-5564625.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {Name:"Zeon Light", 
            Size:"250x375mm", Price:"15200", Rating:"4.3", Review:"145", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq42UVU3ljspME0A76VfMKAKOZeqsHwXHtw&usqp=CAU"},
        {Name:"Wires", 
            Size:"250x375mm", Price:"15200", Rating:"4.7", Review:"45", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr15bhVZtnd0mG0JKIS6jsZUhAeKwEFDmgQ&usqp=CAU"},
        {Name:"T Pipes", 
            Size:"250x375mm", Price:"15200", Rating:"4.8", Review:"56", 
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDE1YTiA5l9zOUaKT697IAL-MkrBpwnVBlQQ&usqp=CAU"},
        {Name:"Woodland Teak Plus", 
            Size:"250x375mm", Price:"15200", Rating:"3", Review:"90", 
            Image:"https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wash Basin", 
            Size:"250x375mm", Price:"15200", Rating:"3.3", Review:"106", 
            Image:"https://images.pexels.com/photos/7893133/pexels-photo-7893133.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Lights", 
            Size:"250x375mm", Price:"15200", Rating:"4.3", Review:"45", 
            Image:"https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Bathroom Fittings", 
            Size:"250x375mm", Price:"15200", Rating:"4.8", Review:"80", 
            Image:"https://images.pexels.com/photos/6781117/pexels-photo-6781117.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wood Tiles", 
            Size:"250x375mm", Price:"15200", Rating:"4.6", Review:"86", 
            Image:"https://images.pexels.com/photos/5564625/pexels-photo-5564625.jpeg?auto=compress&cs=tinysrgb&w=600"},
    ]

    const dropArray=[
        {main:"ALL CATEGORIES",sub:["TILES", "PIPE", "WIRES", "BATHROOM FITTINGS", "SWITCH BOARDS"]},
        {main:"TILES", sub: ["t1","t2","t3","t4"] }, 
        {main:"PIPE", sub: ["p1","p2","p3","p4"]},
        {main:"WIRES", sub: ["w1","w2","w3","w4"] },
        {main:"BATHROOM FITTINGS", sub: ["br1","br2","br3","br4"] },
        {main:"SWITCH BOARDS", sub: ["s1","s2","s3","s4"]},
    ]

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
        <center>
            <h3>
                PRODUCTS
            </h3>

            <p style={{textAlign:"center", textIndent:"50px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta mi ultrices gravida euismod. Phasellus at commodo sem, non dignissim mi. Morbi euismod sit amet ligula sit amet pellentesque. Etiam aliquam eget purus ac porta. Suspendisse viverra viverra ex vitae auctor. Suspendisse ut ipsum efficitur, ullamcorper est eget, fermentum odio. Cras finibus sit amet lectus in eleifend. Curabitur egestas in metus sit amet interdum. Morbi nec ex massa.
            </p>
        </center>

        <div style={{display:"flex"}}>
            <div 
                style={
                    {
                        width:"18%",
                        height:"35px",
                        backgroundColor:"red",
                        borderRadius:"30px",
                        textAlign:"center",
                        color:"white",
                        marginRight:"10%"
                    }
                }
            >
                <b>
                    FILTER
                </b>
            </div>

            <div 
                style={
                    {
                        display:"flex",
                        width:"78%",
                        height:"35px",
                        backgroundColor:"red",
                        borderRadius:"30px",
                        textAlign:"center",
                        color:"white",
                        
                    }
                }
            >


            {
                dropArray.map((drop)=>{
                        return<Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                {drop.main}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            {
                                drop.sub.map((item)=>{
                                        return<Dropdown.Item>
                                            {item}
                                        </Dropdown.Item>
                                    }
                                )
                            }
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                )
            }

            </div>
        </div>

        <div style={{display:"flex", flexWrap:"wrap"}}>

            {
                mostPopArray.map((data)=>{
                        return <div
                            style={
                                {
                                    width:"20%",
                                    border: "2px solid gray",
                                    borderRadius: "15px",
                                    padding:"5px",
                                    margin:"25px",
                                    height:"400px"
                                }
                            }  
                        >
                        
                            <div className='Half'
                                style={{padding : "5px"}}
                            >
                                <img src={data.Image}/>
                            </div>
                        
                            <div className='Half'>
                                <h3>{data.Name}</h3>

                                <table style={{width:"100%"}}>
                                    <tr>
                                        <td>Size : {data.Size}</td>
                                        <td style={{textAlign:"right"}}>
                                            <b>
                                                {data.Price}
                                            </b>
                                        </td>
                                    </tr>
                                </table>

                                <h6 style={{textAlign:"center", marginTop:"15px"}}>
                                    <AiOutlineStar style={{color:"gold", margin:"2px"}}/>
                                    {data.Rating} | 
                                    <GoVerified style={{color:"blue", margin:"2px"}} />
                                    {data.Review} Reviews
                                </h6>

                                <center>            
                                    <hr style={{
                                                width:"85%",
                                                border: "1px solid gray",
                                                marginTop: "0px"
                                            }
                                        }
                                    />

                                    <button
                                        style={
                                            {
                                                width:"80%",
                                                borderRadius:"10px",
                                                color:"White",
                                                backgroundColor:"Red",
                                                border:"0px",
                                                height:"30px",
                                                marginBottom:"0px"
                                            }
                                        }
                                    >
                                        Add to Cart
                                    </button>
                                </center> 
                            </div>   
                        </div>
                    }
                )
            }
        </div>

    </div>
  )
}

export default Product