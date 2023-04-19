import React from 'react'
import { useState, useEffect } from 'react'
import {BiRupee} from 'react-icons/bi';

import {Link} from 'react-router-dom';

function Cart() {
    const [items, setitem] = useState(
        [
            {   Id: 1,
                Name:"Zeon Light", 
                Desc:"Honey Onyx Rhomboid Interlocking Polished. 1 PIECE = 0.80 SFT",
                Size:"250x375mm", 
                Price:20,
                Count: 1,
                Stock: true,
                Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq42UVU3ljspME0A76VfMKAKOZeqsHwXHtw&usqp=CAU"},
            {   Id: 2,
                Name:"Wires", 
                Desc:"Honey Onyx Rhomboid Interlocking Polished. 1 PIECE = 0.80 SFT",
                Size:"250x375mm", 
                Price:40,
                Count: 1,
                Stock: true,
                Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr15bhVZtnd0mG0JKIS6jsZUhAeKwEFDmgQ&usqp=CAU"},
            {   Id: 3,
                Name:"T Pipes", 
                Desc:"Honey Onyx Rhomboid Interlocking Polished. 1 PIECE = 0.80 SFT",
                Size:"250x375mm", 
                Price:200,
                Count: 1,
                Stock: false,
                Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDE1YTiA5l9zOUaKT697IAL-MkrBpwnVBlQQ&usqp=CAU"},
        ]
    );

    const addCount = (id) =>{
        const updatedItems = items.map((item)=>{
                if(item.Id === id)
                {
                    return{ ...item, Count: (item.Count+1)};
                }
                return item;
            }
        );
        setitem(updatedItems);
    };

    const subCount = (id) =>{
        const updatedItems = items.map((item)=>{
                if(item.Id === id)
                {
                    return{ ...item, Count: (item.Count-1)};
                }
                return item;
            }
        );
        setitem(updatedItems);
    };

    var n = 0;
    const [numb, newNumb] = useState(0);
    var sum = 0 ;
    const [total, subtotal] = useState(0);

    const initCal=(id)=>{
            items.map((item)=>{
                if(item.Id=== id && item.Stock === true)
                {
                    n=n+1;
                    sum =sum + item.Price;
                }   
            }
        );
        newNumb(numb+n);
        subtotal(total + sum);
    };
    
    const calSum=(id)=>{
        items.map((item)=>{
                if(item.Id === id)
                {
                    subtotal(total + item.Price);
                }
                return item;
            }
        );
        newNumb(numb+1); 
    };

    const changeSum=(id)=>{
            items.map((item)=>{
                if(item.Id === id)
                {
                    subtotal(total - item.Price);
                }
                return item;
            }
        );   
        newNumb(numb-1); 
    };

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

        <div style={{display:"flex"}}>           
            <h3 style={
                        {
                            color:"Red",
                            paddingRight:"7px"
                        }
                    }>
                My
            </h3>
            <h3>
                Cart
            </h3>
        </div> 
        
        <div
            style={
                {
                    border : "1px solid black",
                    borderRadius:"10px",
                    width:"80%",
                    height:"auto"
                }
            }
        >
            <div 
                style={
                    {
                        textAlign:"left",
                    }
                }
            >
                <h1>
                    Shopping Cart
                </h1>
                deselect all the items

                <hr style={{border:"1px solid black"}}/>   
            </div>

            {
                items.map((data)=>{
                        return<div>
                            <div
                                style={
                                    {
                                        display:"flex",
                                    }
                                }
                            >
                                <div>
                                    <img src={data.Image} onLoad={()=>{initCal(data.Id)}}/>
                                </div>
                                <div>
                                    <h4>{data.Name}</h4>
                                    {
                                        data.Stock==true ?    
                                            <div>
                                                
                                                <p
                                                    style={
                                                        {
                                                            color:"green"
                                                        }
                                                    }
                                                >
                                                    In Stock
                                                </p>
                                            </div> 
                                            : 
                                            <p
                                                style={
                                                    {
                                                        color:"red"
                                                    }
                                                }
                                            >Out Of Stock</p>
                                    }
                                    <p>{data.Desc}</p>
                                    <p>Price : <BiRupee/> {data.Price}</p>
                                    
                                    {
                                        data.Stock==true ?
                                        <div style={{display:"flex"}}>
                                            <p style={{marginRight:"8px"}}>
                                                <b>Quantity : </b>
                                            </p>
                                            {
                                                data.Count == 1 ?
                                                <div>
                                                    <button disabled
                                                        style={
                                                            {
                                                                margin:"1px solid grey", 
                                                                borderRadius:"15px",
                                                                marginRight:"8px",
                                                                width:"30px"
                                                            }
                                                    }> 
                                                        <b> - </b>
                                                    </button>
                                                </div>
                                                :
                                                <div>
                                                    <button
                                                        onClick={
                                                            ()=>{
                                                                subCount(data.Id);
                                                                changeSum(data.Id);
                                                            }
                                                        }
                                                        style={
                                                            {
                                                                margin:"1px solid grey", 
                                                                borderRadius:"15px",
                                                                marginRight:"8px",
                                                                width:"30px"
                                                            }
                                                    }> 
                                                        <b> - </b>
                                                    </button>
                                                </div>
                                            }
                                            
                                                {data.Count}
                                            <button 
                                                onClick={
                                                    ()=>{
                                                        addCount(data.Id);
                                                        calSum(data.Id);
                                                    }
                                                }
                                                style={
                                                    {
                                                        margin:"1px solid grey", 
                                                        borderRadius:"15px",
                                                        marginLeft:"8px",
                                                        width:"30px",
                                                        height:"30px"
                                                    }
                                            }> 
                                                <b> + </b>
                                            </button> 
                                        </div>
                                        :
                                        <></>
                                    }
                                     
                                </div>
                            </div>
                            <hr/>
                        </div>
                        
                    }
                )
            }

            <table style={{width:"100%"}}>
                <tr>
                    <td style={{textAlign:"right"}}>
                        Subtotal ({numb} items): <BiRupee/> {total} 
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign:"right"}}>
                        <button 
                            style={
                                {
                                    color:"white", 
                                    backgroundColor:"red",
                                    borderRadius:"5px",
                                    border:"0px"
                                }
                            }
                        >
                            Proceed to Buy
                        </button>
                    </td>
                </tr>
            </table>

        </div>         
        
        <Link to="/track">
            Track your shipping.
        </Link>
    </div>
  )
}

export default Cart