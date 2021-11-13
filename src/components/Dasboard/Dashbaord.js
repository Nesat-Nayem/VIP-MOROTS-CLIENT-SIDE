import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "./../AddServices/AddServices";
import Review from "./../Review/Review";
import MyBookings from "./../MyBookings/MyBookings";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// import ManageServices from "./../ManageServices/ManageServices";
// import ManageOrder from "./../MangeOrder/MangeOrder";
import useFirebase from "./../../hooks/useFirebase";
import PayUs from "../PayUs/PayUs";
import MangeOrder from "./../MangeOrder/MangeOrder";
import MantainOrders from "../MantainOrders/MantainOrders";
// import useAuth from "./../../hooks/useAuth"

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user,handleLogout } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);
  

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // if (data[0]?.role === "admin") {
        if (data[0]?.role === "admin") {

          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user.email]);

  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>{user.email && isAdmi? <h5>admin</h5>:<h5>user</h5>} Dashboard</h5>

              {/* {user.email&&isAdmi?alert('admin entry'):<div></div>} */}


             

                
                  {/* {!user.email && !isAdmi?
                  <Link to={`${url}`}>
                  <li className="dashboard-menu">my Orders</li>
                </Link>
                :<div></div>} */}

                  
                  <Link to={`${url}/myBooking`}>
                  <li className="dashboard-menu">my Orders</li>
                </Link>
                
              
                
              
              <Link to={`${url}/review`}>
                <li className="dashboard-menu">Review</li>
              </Link>
             

             
           
              <Link to={`${url}/payUs`}>
                <li className="dashboard-menu">Pay us</li>
              </Link>
         

              
              
              <Link to="/login">
                <button onClick={handleLogout}>Logout</button>
              </Link>
              
             


             

               
              
                {/* {isAdmi && ( */}
                  {/* // <Link to={`${url}/addService`}>
                  //   <li className="dashboard-menu">Add Service</li>
                  // </Link>
                // )} */}

                {user.email && isAdmi?
              
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>

                   :<div></div>
                }
                

                {user.email&& isAdmi? 
                  <Link to={`${url}/manageOrder`}>
                  <li className="dashboard-menu">Manage Orders</li>
                </Link>
                :<div></div>}

                  {/* <Link to={`${url}/addService`}>
                  <li className="dashboard-menu">Add A Services</li>
                </Link> */}

                {user.email&& isAdmi? 
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                :<div></div>}

                {user.email && isAdmi? 
                <Link to={`${url}/mantainOrders`}>
                  <li className="dashboard-menu">manage services</li>
                </Link>
                : <div></div>}
              {user.email&& isAdmi? 
                
                <Link to="/login">
                <button onClick={handleLogout}>Logout</button>
              </Link>
                
                :<div></div>}
             

              
              



              
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={`${path}/myBooking`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>

              <Route exact path={`${path}/payUs`}>
                <PayUs></PayUs>
              </Route>

              {/* <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route> */}
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              
              <Route exact path={`${path}/manageOrder`}>
                {/* <ManageServices></ManageServices> */}
                <MangeOrder></MangeOrder>
              </Route>

              <Route exact path={`${path}/mantainOrders`}>
                {/* <ManageServices></ManageServices> */}
                <MantainOrders></MantainOrders>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
