import React, { useState } from "react";
import {useAuth0} from "@auth0/auth0-react"; 
import { Row, Col, List} from "reactstrap";
import { Fragment } from "react";
import { Table } from "reactstrap";


const UserOrders = () => {

    const { user } = useAuth0();
    const { name, picture, email } = user;
    const { getAccessTokenSilently } = useAuth0();
    const [message, setMessage] = useState("");
    const [state, setState] = useState({
      apiMessage: [],
    });
    const serverUrl = "https://pizzapi42sahil.herokuapp.com";


    const PreviouslyOrderedItems = async () => {
      try {
        const token = await getAccessTokenSilently();
        
        const response = await fetch(
          `${serverUrl}/api/messages/getorders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
          
       const responseData = await response.json();
       const rd = responseData.orders

       setState({
            ...state,
            apiMessage: rd,
        })
        
        mountComp()
      
     
      } catch (error) {
        setMessage(error.message);
      }
       
    }

    const mountComp = () =>{
      console.log(state.apiMessage[0])

      return (
        <div className="App">
        <table>
        <tr>
          <th>Orders</th>
          <th>Date</th>
        </tr>
        {state.apiMessage.map((item) => {
          return (
            <tr>
              <td>{item.type}</td>
              <td>{item.timestamp}</td>
            </tr>
          )
        })}
        </table>
        </div>
      )}
     
      
      
    
    

    return (
        <div>
            <div class="div-block-2">
            <h1 class="heading-6">Previous orders</h1>
            <button className="btn btn-primary " onClick={() => {PreviouslyOrderedItems()}}>Show Previous Orders</button>
            </div>
            {mountComp()}
        </div>
    );
};

  export default UserOrders;