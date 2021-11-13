import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://polar-cliffs-75761.herokuapp.com/allServices")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
      <div>
        <h1 className="m-5">Featured Cars</h1>
        <div className="services">
          <div className="row container">
            {services?.map((pd, index) => (
              <div className="col-md-6 col-lg-6">
                <div className="service p-3 border border m-2">
                  <div className="service-img">
                    <img className="w-100" src={pd?.image} alt="" />
                  </div>
                  <h3 className="m-4">{pd.name}</h3>
                  <div className="d-flex justify-content-between mb-3">
                  <h4>${pd.price}</h4>
                  <Link to={`/services/${pd._id}`}>
                    {" "}
                    <button className="btn btn-success">book Now</button>
                  </Link>
                  </div>

                  <p>{pd.description}</p>
                  

                  {/* <Rating
                                initialRating={pd.star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>

                            </Rating> */}

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default AllServices;