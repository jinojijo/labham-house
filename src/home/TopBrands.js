import React from 'react'

import {MdArrowForwardIos} from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel'

function TopBrands() {

    const topBrandArray=[
        [
            {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq42UVU3ljspME0A76VfMKAKOZeqsHwXHtw&usqp=CAU"},
            {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr15bhVZtnd0mG0JKIS6jsZUhAeKwEFDmgQ&usqp=CAU"},
            {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDE1YTiA5l9zOUaKT697IAL-MkrBpwnVBlQQ&usqp=CAU"},
            {Image:"https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&w=600"},
        ],

        [
            {Image:"https://images.pexels.com/photos/7893133/pexels-photo-7893133.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {Image:"https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {Image:"https://images.pexels.com/photos/6781117/pexels-photo-6781117.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {Image:"https://images.pexels.com/photos/5564625/pexels-photo-5564625.jpeg?auto=compress&cs=tinysrgb&w=600"},
        ],
    ]
  return (
    <div style={{marginTop:"30px"}}>
    
        <table style={{width:"100%"}}>
            <tr>
                <td>
                    <div style={{display:"flex"}}>
                        <h3>
                            Top 
                        </h3>
                        <h3 style={
                                    {
                                        color:"Red",
                                        paddingLeft:"7px",
                                        paddingRight:"7px"
                                    }
                                }>
                            Brands
                        </h3>
                    </div>            
                </td>

                <td style={{textAlign:"right"}}>
                    View All 
                    <MdArrowForwardIos style={{paddingLeft:"5px", color:"blue", fontSize:"20px"}}/>
                </td>
            </tr>
        </table>
        
        <hr style={{border: "1px solid gray"}}/>

        
        <Carousel>
            {
                topBrandArray.map((data)=>{
                        return <Carousel.Item interval={5000}>
                            <div 
                                style={
                                    {
                                        display:"flex",
                                        width:"100%",
                                        height:"200px"
                                    }
                                }>
                                {
                                    data.map((item)=>{
                                            return <div 
                                                style={
                                                    {
                                                        width:"25%",
                                                        padding:"30px",
                                                    }
                                                }
                                            >
                                                <img 
                                                    src={item.Image} 
                                                    style={
                                                        {
                                                            borderRadius:"5%",
                                                            maxHeight:"100%",
                                                            maxWidth:"100%"
                                                        }
                                                    }
                                                />
                                            </div>
                                        }
                                    )
                                }
                            </div>
                        </Carousel.Item>
                    }
                )
            }
        
        </Carousel>

    </div>
  )
}

export default TopBrands