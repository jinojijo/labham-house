import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import {AiOutlineStar} from 'react-icons/ai';

function CustReview() {

    const custReviewArray =[
        {
            Name:"Genette Nachum", Rating:"4.6", 
            Image:"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta mi ultrices gravida euismod. Phasellus at commodo sem, non dignissim mi. Morbi euismod sit amet ligula sit amet pellentesque. Etiam aliquam eget purus ac porta. Suspendisse viverra viverra ex vitae auctor. Suspendisse ut ipsum efficitur, ullamcorper est eget, fermentum odio. Cras finibus sit amet lectus in eleifend. Curabitur egestas in metus sit amet interdum. Morbi nec ex massa."
        },
        {
            Name:"Natalija Synne", Rating:"4.8",  
            Image:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Vestibulum dignissim aliquam mattis. Quisque pulvinar ut elit at porta. Ut interdum consequat nisl ut luctus. Nulla sem purus, condimentum aliquam sagittis id, laoreet in lacus. Suspendisse mattis cursus volutpat. Donec ut lacus non nisi vehicula porttitor. In hac habitasse platea dictumst. Phasellus eget leo sit amet ligula iaculis vehicula. Phasellus lacinia arcu et tortor porta, a finibus est ultrices. Phasellus scelerisque imperdiet blandit. Ut non sapien congue."
        },
        {
            Name:"Emilia Christina", Rating:"4.0",  
            Image:"https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Phasellus a ligula diam. Nulla eget dignissim tortor, vitae viverra justo. Donec semper pharetra elit, eget lacinia mauris interdum dictum. Cras id risus tincidunt nisi tincidunt egestas. Cras nec dictum neque. Mauris feugiat metus egestas, aliquet nunc vitae, fringilla dui. In facilisis nisl ac elit eleifend, id gravida leo posuere. Integer dapibus ut leo eu imperdiet. Fusce ipsum ligula, consequat vel dapibus ut, aliquet eget ex. Vivamus at velit finibus"
        },
        {
            Name:"Esther Allan", Rating:"5.0",  
            Image:"https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Sed pellentesque aliquam neque et consequat. Suspendisse non enim sed enim feugiat dignissim. Donec maximus, risus a mollis pellentesque, velit ipsum rhoncus enim, lacinia tempus sem enim id eros. Quisque ut venenatis leo, sed vulputate est. Aliquam laoreet leo vitae tellus mollis molestie. Vestibulum sollicitudin, justo at porta faucibus, lectus nibh sagittis dolor, vel elementum augue purus sit amet magna. Nulla id sapien varius, fermentum lorem et, imperdiet velit."
        },
        {
            Name:"Estela Emanuil", Rating:"5.0",  
            Image:"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Maecenas et ligula risus. Quisque euismod gravida turpis suscipit tempus. Cras varius eros velit, vel aliquam est fermentum sit amet. Duis ipsum ex, ullamcorper sit amet lacus ut, condimentum porta risus. Nunc sit amet urna nulla. In lacinia mollis est et interdum. Etiam ut ex et sapien maximus iaculis. Morbi eget elit vitae arcu facilisis pulvinar."
        },
        {
            Name:"Aksel Tonatiuh", Rating:"4.9",  
            Image:"https://images.pexels.com/photos/301952/pexels-photo-301952.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Nulla eget ipsum vulputate, cursus urna ac, viverra libero. Nunc eget ex rutrum, volutpat turpis nec, pulvinar odio. Donec vitae ipsum lacinia felis pulvinar rutrum. Phasellus vel sem nec augue laoreet semper eu sed mauris. Suspendisse sit amet sapien eu nunc faucibus blandit. Praesent posuere eros at felis dapibus, nec pellentesque ligula venenatis."
        },
        {
            Name:"Tychon Arun", Rating:"4.7",  
            Image:"https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600",
            Review:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris congue egestas consequat. Integer vel enim at risus tempor feugiat ut euismod ante. Vivamus rhoncus risus ac laoreet rutrum. Aenean ultrices felis sed augue dapibus fermentum. Mauris nec leo sem. Morbi vitae tellus at odio consequat posuere ut nec libero."
        }
    ]

  return (
    <div style={{marginTop:"30px", marginBottom:"30px"}}>
    
        <h3 style={{color:"Red", textAlign:"center"}}>
            Customer Reviews
        </h3>
                    
        <center>
            <hr style={{border: "2px solid red", width:"25%",}}/>

            <div
                style={
                    {
                        width:"100%",
                        height:"300px",
                        backgroundColor:"pink",
                        borderRadius:"10px"
                    }
                }
            >
                <Carousel>
                    {
                        custReviewArray.map((data)=>{
                                return <Carousel.Item>
                                    <div 
                                        style={
                                            {
                                                marginLeft:"10%",
                                                marginRight:"10%",
                                                marginTop:"3%",
                                                height:"100%"
                                            }
                                        }
                                    >

                                        <div style={{height:"50%"}}>
                                            <p style={{textAlign:"justify"}}>
                                                {data.Review}
                                            </p>
                                        </div>

                                        <div 
                                            style={
                                                {
                                                    display:"flex", 
                                                    height:"50%"
                                                }
                                            }
                                        >
                                            <div style={{width:"20%" }}>
                                                <img 
                                                    src={data.Image}
                                                    style={
                                                        {
                                                            borderRadius:"50%",
                                                            maxHeight:"100%",
                                                            maxWidth:"100%"
                                                        }
                                                    }
                                                />
                                            </div>

                                            <div>
                                                <h4>{data.Name}</h4>
                                                <div
                                                    style={
                                                        {
                                                            display:"flex",
                                                            backgroundColor:"green",
                                                            borderRadius:"25%",
                                                            width:"50%",
                                                            padding:"5%",
                                                            margin:"10%"
                                                        }
                                                    }
                                                >
                                                    <h6>{data.Rating} </h6>  
                                                    <AiOutlineStar style={{color:"gold", margin:"2px"}}/>    
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            }
                        )
                    }
                
                </Carousel>
            </div>
        </center>
    </div>
  )
}

export default CustReview