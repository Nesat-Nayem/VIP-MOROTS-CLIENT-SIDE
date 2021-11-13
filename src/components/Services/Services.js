import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);
  console.log(services);
  return (
    <div>
      <h1>Services</h1>
      <div className="services">
        <div className="row container">
          {services?.map((pd, index) => (
            <div className="col-md-6 col-lg-6">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="img-fluid" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>{pd.price}</p>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Buy Now</button>
                </Link>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
