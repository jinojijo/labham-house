import React from 'react'

import {AiOutlineStar} from 'react-icons/ai';
import {GoVerified} from 'react-icons/go';
import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';

function MostPop() {

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
    ]

  return (
    <div>

        <table style={{width:"100%"}}>
            <tr>
                <td>
                    <h3>Most Popular</h3>
                </td>

                <td style={{textAlign:"right"}}>
                    <Link to="/product"
                        style={{textDecoration: 'none', color:"black"}}
                    > 
                        View More
                        <MdArrowForwardIos style={{paddingLeft:"5px", color:"blue", fontSize:"20px"}}/>
                    </Link>
                </td>
            </tr>
        </table>

        <hr style={{border: "1px solid gray"}}/>

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

export default MostPop