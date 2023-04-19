import React from 'react'
import './Home.css'
import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';

function TopCat() {

    const topCatArray=[
        {Name:"Tiles", Image:"https://somany-uat.s3.amazonaws.com/category/7e1da203-9c17-4807-8450-7bf4e4d59d73-1678687807456.jpeg"},
        {Name:"Pipes", Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXojLZdu6vm2_3aL0RlhlpTb0isPdkVa_MA&usqp=CAU"},
        {Name:"Wiring Cables", Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr15bhVZtnd0mG0JKIS6jsZUhAeKwEFDmgQ&usqp=CAU"},
        {Name:"Woodland Teak Plus", Image:"https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wash Basin", Image:"https://images.pexels.com/photos/7893133/pexels-photo-7893133.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Lights", Image:"https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Bathroom Fittings", Image:"https://images.pexels.com/photos/6781117/pexels-photo-6781117.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {Name:"Wood Tiles", Image:"https://images.pexels.com/photos/5564625/pexels-photo-5564625.jpeg?auto=compress&cs=tinysrgb&w=600"},
    ]

  return (
    <div style={{marginTop:"30px"}}>
    
        <table style={{width:"100%"}}>
            <tr>
                <td>
                    <div style={{display:"flex"}}>
                        <h3>
                            Shop From 
                        </h3>
                        <h3 style={
                                    {
                                        color:"Red",
                                        paddingLeft:"7px",
                                        paddingRight:"7px"
                                    }
                                }>
                            Top Categories
                        </h3>
                    </div>            
                </td>

                <td style={{textAlign:"right"}}>
                    <Link to="/ticat"
                        style={{textDecoration: 'none', color:"black"}}
                    >
                        View All 
                        <MdArrowForwardIos style={{paddingLeft:"5px", color:"blue", fontSize:"20px"}}/>
                    </Link>
                </td>
            </tr>
        </table>
        
        <hr style={{border: "1px solid gray"}}/>
            
        <div 
            style={ 
                {
                    padding :"2%",
                    width:"100%",
                    display:"flex",
                    flexWrap:"wrap"
                } 
            } 
        >

            {topCatArray.map((data)=>{
                        return <div 
                            style={
                                {
                                    margin:"20px",
                                }
                            }
                        >
                            <center>
                                
                                <img src={data.Image}
                                    alt='car'
                                    height='100px'
            
                                    style={
                                        { 
                                            borderRadius : "50%",
                                            border: " 1px solid red", 
                                            width:"100px",
                                            height:"100px" 
                                        }
                                    }
                                />
                            
                                <p>{data.Name}</p>
                                
                            </center>
                        </div>
                    }
                )
            }
            
        </div>
    </div>
  )
}

export default TopCat