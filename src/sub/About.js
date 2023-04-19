import React from 'react'

function About() {
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
                        maxWidth:"100%"
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
                    ABOUT US
                </h1>
            </div>
        </div>

        <div
            style={
                {
                    display:"flex",
                    width:"100%",
                    height:"500px",
                    marginTop:"20px"
                }
            }
        >
            <div
                style={{width:"40%"}}
            >
                <img
                    src="https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    style={
                        {
                            borderRadius:"20px",
                            maxWidth:"100%",
                            height:"auto",
                            padding:"10px"
                        }
                    }
                />
            </div>

            <div
                style={
                    {
                        width:"60%",
                        padding:"10%", 
                        textAlign:"center"
                    }
                }
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dui luctus, malesuada ipsum non, auctor enim. Morbi maximus hendrerit orci, in semper nisl convallis vel. Ut lobortis, quam id volutpat laoreet, sem turpis blandit massa, vitae imperdiet mi metus ut ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sodales mauris a nulla molestie efficitur. Duis ligula nibh, fermentum id nulla non, pulvinar rutrum arcu. Suspendisse in ornare dui, sed laoreet elit. Etiam fringilla elit eget quam laoreet, et bibendum eros facilisis.
                </p>
            </div>
        </div>

        <div style={{width:"100%"}}>
            <img 
                src='https://www.w3schools.com/css/img_5terre_wide.jpg'

                style={
                    {
                        height:"auto",
                        maxWidth:"100%"
                    }
                }
            />
        </div>

        <div
            style={
                {
                    display:"flex",
                    width:"100%",
                    height:"500px",
                    marginTop:"20px"
                }
            }
        >

            <div
                style={
                    {
                        width:"60%",
                        padding:"10%", 
                        textAlign:"center"
                    }
                }
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dui luctus, malesuada ipsum non, auctor enim. Morbi maximus hendrerit orci, in semper nisl convallis vel. Ut lobortis, quam id volutpat laoreet, sem turpis blandit massa, vitae imperdiet mi metus ut ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sodales mauris a nulla molestie efficitur. Duis ligula nibh, fermentum id nulla non, pulvinar rutrum arcu. Suspendisse in ornare dui, sed laoreet elit. Etiam fringilla elit eget quam laoreet, et bibendum eros facilisis.
                </p>
            </div>
        
            <div
                style={{width:"40%"}}
            >
                <img
                    src="https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    style={
                        {
                            borderRadius:"20px",
                            maxWidth:"100%",
                            height:"auto",
                            padding:"10px"
                        }
                    }
                />
            </div>
        </div>
    </div>
  )
}

export default About