import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://polar-cliffs-75761.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);
  console.log(services);
  return (
    <div>
     
      <div className="services">
        <div className="row container">
          {services?.map((pd, index) => (

            <div className="col-md-6 col-lg-6">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="img-fluid" src={pd?.image} alt="" />
                </div>
                <h5 className="m-3">{pd.name}</h5>
                <div className="d-flex mb-4 justify-content-between">
                <h4>${pd.price}</h4>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Buy Now</button>
                </Link>
                </div>
                <p className="text-start">{pd.description}</p>               
              </div>
            </div>



          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
