import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PlaceO = () => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const {user} = useAuth0();
    const { getAccessTokenSilently } = useAuth0();
    const [message, setMessage] = useState("");
const placeorders = async () => {
    
    try {
      const token = await getAccessTokenSilently();
      const order = {
       type:"pepperoni, cheese pizza"
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
      setMessage(error.message);
    }


    return (
        <div className="container">
    
    
    
    
          <h1>External API</h1>
          <p>
            Use these buttons to call an external API. The protected API call has an
            access token in its authorization header. The API server will validate
            the access token using the Auth0 Audience value.
          </p>
          <div
            className="btn-group mt-5"
            role="group"
            aria-label="External API Requests Examples"
          >
    
            <button type="button" className="btn btn-primary" onClick={placeorders}>
              Result
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={placeorders}
            ></button>
          </div>
          {message && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4">{message}</code>
                </div>
              </div>
            </div>
          )}
        </div>
      );
          }}

          export default PlaceO

