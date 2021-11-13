import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allServices")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
      <div>
        <h1>Services</h1>
        <div className="services">
          <div className="row container">
            {services?.map((pd, index) => (
              <div className="col-md-6 col-lg-4">
                <div className="service p-3 border border m-2">
                  <div className="service-img">
                    <img className="w-50" src={pd?.image} alt="" />
                  </div>
                  <h1>{pd.name}</h1>
                  <p>{pd.description}</p>
                  <p>{pd.price}</p>

                  <Rating
                                initialRating={pd.star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>

                            </Rating>

                  <Link to={`/services/${pd._id}`}>
                    {" "}
                    <button className="btn btn-success">book Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default AllServices;