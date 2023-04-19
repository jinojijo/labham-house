import React from 'react'
import { useState } from 'react'
import './SignIn.css'

function SignIn() {

    const [isChecked, setisChecked] = useState(false);

    const Checker=()=>{
        setisChecked(!isChecked);
    }

  return (
    <div>
        <center>
            <h1>
                <b>
                    Sign In
                </b>
            </h1>

            <form>

                <input type='text' placeholder='Name'  className="formCtrl" />
                <br/>

                <input type='text' placeholder='Email' className="formCtrl" />
                <br/>

                <input type='text' placeholder='Phone Number' className="formCtrl" />
                <br/>

                <table>
                    <tr>
                        <td>
                            <input 
                                type='Radio' 
                                onClick={Checker} 
                                checked={isChecked}
                            />
                        </td>
                        <td
                            style={
                                {
                                    color:"red",
                                    paddingRight:"0px"
                                }
                            }
                        > I've read and agree to</td>
                        <td
                            style={
                                {
                                    paddingLeft:"3px"
                                }
                            }
                        >
                            <b>
                                Terms & Conditions
                            </b>
                        </td>
                    </tr>
                </table>
                
                <button 
                    className="formCtrl" 
                    style={
                        {
                            color:"white",
                            backgroundColor:"red"
                        }
                    }
                >
                    Login
                </button>    

            </form>
        </center>
    </div>
  )
}

export default SignIn