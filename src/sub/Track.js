import React from 'react'

function Track() {
  return (
    <div>
        <center>
            <h2>
                <b>
                    Track Your Order
                </b>
            </h2>

            <hr/>

            <p>
                <b>
                    Please enter your tracking number here
                </b>
            </p>

            <form>
                <input 
                    type='text' placeholder='Order Id'
                    style={
                        {
                            width:"30%",
                            textAlign:"center",
                            border:"1px solid black",
                            height:"50px",
                            borderRight:"0px",
                            borderTopLeftRadius:"15px",
                            borderBottomLeftRadius:"15px",
                        }
                    }
                />
            
                <button
                    style={
                        {
                            borderRadius:"15px",
                            border:"1px solid black",
                            height:"50px",
                        }
                    }
                >
                    Track
                </button>
            </form>
            
            <br/>
            <p>
                Enter the tracking code sent on your registered Email/Mobile Number in the shipment confirmation email.
            </p>
        </center>
    </div>
  )
}

export default Track