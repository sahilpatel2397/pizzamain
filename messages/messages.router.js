/**
 * Required External Modules and Interfaces
 */

const express = require("express");

const { checkJwt } = require("../authz/check-jwt");

var ManagementClient = require('auth0').ManagementClient;

var auth0Client = new ManagementClient({
  domain: 'dev-njufz051.us.auth0.com',
  clientId: "XKdxLFrHMbdHNBLCj4h6ZMzUnx7TbH6d",
  clientSecret: process.env.CLIENT_SECRET,
  audience: "https://dev-njufz051.us.auth0.com/api/v2/",
  scope: 'update:users_app_metadata',
  scope: 'read:users'

});

//const checkScopes = jwtAuthz([ 'create:order' ]);


/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */
 

messagesRouter.get("/getorders",checkJwt, async (req, res) => {
  const id = req.user.sub
  const timestamp = (new Date()).getTime
  const order = Object.assign(req.body, { timestamp })
  
  try {
   let metadata = await auth0Client.getUser({ id }).then(user => user.user_metadata || {})

   
  res.status(200).send(metadata.pizzas);
   
  } catch (error) {
    res.status(error.status ?? 500).json({ message: `Error: ${error.message}`, stack: error.stack ?? [] }) 
  }
});

///////////////
messagesRouter.post("/placeorders",checkJwt, async (req, res) => {
  const id = req.user.sub
  const timestamp = (new Date()).toLocaleString()
  detail = req.body
  
  try {
   let metadata = await auth0Client.getUser({ id }).then(user => user.user_metadata || {})
  /* const detail = {
    "typ2":"pepperoni, italian"
   }
*/
   const order = Object.assign(req.body, { timestamp })
   let namespacedata = metadata.pizzas ?? { orders: [] }
   namespacedata.orders.push(order)
   metadata.pizzas = namespacedata
  
  let resp = await auth0Client.updateUserMetadata({id}, metadata);

  console.log(metadata.pizzas)
  res.status(200).send(metadata.pizzas);
   
  } catch (error) {
    res.status(error.status ?? 500).json({ message: `Error: ${error.message}`, stack: error.stack ?? [] }) 
  }
});


module.exports = {
  messagesRouter,
};
