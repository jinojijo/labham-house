import React from 'react'

function TilesCat() {

    const mostPopArray=[
        {
            Name:"landsacaping", 
            Image:"https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Bathroom", 
            Image:"https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Kitchen", 
            Image:"https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Residential Flooring", 
            Image:"https://images.pexels.com/photos/8753032/pexels-photo-8753032.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Stair Case Solutions", 
            Image:"https://images.pexels.com/photos/704765/pexels-photo-704765.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Exterior", 
            Image:"https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Poarch And Parking", 
            Image:"https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Commercial Florring", 
            Image:"https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Name:"Outdoor And Terrace", 
            Image:"https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=600"
        },

    ]

  return (
    <div
        style={
            {
                paddingLeft:"10%",
                paddingRight:"10%",
                paddingTop:"2%",
                backgroundColor:"yellowgreen",
            }
        }
    >
        <h1 style={{textAlign:"center"}}>
            Explore Tiles by Categories
        </h1>

        <div 
            style={
                {
                    display:"flex", 
                    flexWrap:"wrap",
                }
            }
        >

            {
                mostPopArray.map((data)=>{
                        return <div
                            style={
                                {
                                    width:"25%",
                                    padding:"5px",
                                    margin:"40px",
                                    position: "relative",
                                }
                            }  
                        >
                        
                            <img src={data.Image}
                                style={
                                    { 
                                        border:"2px solid white",
                                        borderRadius:"7px",
                                    }
                                }
                            />
                            

                            <div
                                style={
                                    {
                                        position: "absolute",
                                        top: "90%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color:"white"
                                    }
                                }
                            >
                                <h6>
                                    {data.Name}
                                </h6>
                            </div>
                        
                        </div>
                    }
                )
            }
        </div>

    </div>
  )
}

export default TilesCat