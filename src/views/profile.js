import React, { Fragment } from "react";
import UserOrders from "../components/UserOrders";
import ProfileUser from "../components/ProfileUser";


const Profile = () => (
  <Fragment>
    <ProfileUser/>
    <UserOrders/>
  </Fragment>
 );

export default Profile;