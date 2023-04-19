import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TopCat from './TopCat'
import MostPop from './MostPop'
import TopBrands from './TopBrands'
import CustReview from './CustReview'

function HomeP() {

    const carosalArray = [
        {images:"https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" },
        {images:"https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600" },
        {images:"https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600" }
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
        
    
        <div
            style={
                {
                    width:"100%",
                    height:"100%"
                }
            }
        >
            <Carousel>
                {
                    carosalArray.map((ima)=>{
                            return <Carousel.Item interval={1000}> 
                                <img src={ima.images}
                                    width="100%"/>
                            </Carousel.Item>
                        }
                    )
                }    
            </Carousel>

        </div>

        <TopCat/>

        <MostPop/>

        <TopBrands/>

        <CustReview/>
    </div> 
  )
}

export default HomeP