import React, {Component, useState} from "react";
import { withAuth0 } from '@auth0/auth0-react';
import { Alert } from "reactstrap";
import SuccessOrder from "./SuccessOrder";
const serverUrl = "https://pizzapi42sahil.herokuapp.com";

//submit button to check if user is verified && add order to user token && route to profile if successfull
class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.plain = ""
    this.italian = ""
    this.veggie = ""
    this.pepperoni = ""
    this.finalOrder = ""
    this.setMessage = {
    
    }
    this.state = {
      showComponent: false
    };
  }

  checkAuth(){
    console.log("enters")
    const {isAuthenticated} = this.props.auth0;
    console.log(isAuthenticated)
    if(isAuthenticated){
      return true
    } 
    else{
      return false
    }

  }

  checkEmailVerification(){
    const {user} = this.props.auth0;
    if(user.email_verified){
      return true
    } 
    else{
      return false
    }

  }
 
  submitIt() {
    try{
      if(this.checkAuth()){
        if (this.checkEmailVerification()){
          const orders = [this.plain, this.pepperoni, this.veggie, this.italian]
          const finalArray = []
          var arrayLength = orders.length;
          for (var i = 0; i < arrayLength; i++) {
            if(orders[i]!=null && orders[i]!=""){
             finalArray.push(orders[i])
            }
          }
         this.finalOrder = finalArray.join();
         this.count = 1;
         console.log(this.count)
          //call a function to add orders to token && redirect to profile
          this.placeorders()
          if(this.finalOrder!=null && this.finalOrder!=''){
          this.setState({
            showComponent: true,
          });
        
        }
        }
        else{
          console.log("email not verified")
         // window.location.reload(false);
        }
      }
      else{
        console.log("not authenticated")
        const { loginWithRedirect } = this.props.auth0;
        loginWithRedirect();
      }
    }catch(e){
      console.log(e)
    }
  }


   placeorders = async () => {
      try {

        const { getAccessTokenSilently} = this.props.auth0;
        const token = await getAccessTokenSilently();
        console.log(token)
        console.log(this.finalOrder)
        const order = {
          type: this.finalOrder
        }
        const options = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(order)
        }
        return await fetch(`${serverUrl}/api/messages/placeorders`, options)


        
      } catch (error) {
        console.log("enters here")
        console.log(error.message);
      }
  };

  plainHandle(e) {
    const checked = e.target.checked;
    if (checked){
      this.plain = e.target.value
    }
    else{
      this.plain = ""
    }
  }
  pepperoniHandle(e) {
    const checked = e.target.checked;
    if (checked){
      this.pepperoni = e.target.value
    }
    else{
      this.pepperoni = ""
    }
  }
  veggieHandle(e) {
    const checked = e.target.checked;
    if (checked){
      this.veggie = e.target.value
    }
    else{
      this.veggie = ""
    }
  }
  italianHandle(e) {
    const checked = e.target.checked;
    if (checked){
      this.italian = e.target.value
    }
    else{
      this.italian = " "
    }
  }

  render (){
    let notice;
    let orderSuccess
    if(this.checkAuth() && !this.checkEmailVerification()){
      console.log("hello")
      notice = <Alert color="warning">Please Verify your email before placing an order</Alert>
    }
    else{
      notice = <h1>Place your Order</h1>
    }
    if(this.count==1){
      orderSuccess = <Alert color="success">Order Placed!</Alert>
    }
    return(
      <div>
       {notice}
        <div>
          <label><input type="checkbox" value="plain cheese" onChange={e=>this.plainHandle(e)} />Plain Cheese Pizza</label>
          <label><input type="checkbox" value="pepperoni" onChange={e=>this.pepperoniHandle(e)} />Pepperoni Pizza</label>
          <label><input type="checkbox" value="veggie" onChange={e=>this.veggieHandle(e)} />Veggie Pizza</label>
          <label><input type="checkbox" value="italian" onChange={e=>this.italianHandle(e)} />Italian Sausage Pizza</label>
          <button className="btn btn-primary " onClick={() => {this.submitIt()}}>Submit Order</button>
        </div>
        {this.state.showComponent ?
           <SuccessOrder /> :
           null
        }
     </div>
  )
  }
}

    
 export default withAuth0(OrderForm);

 