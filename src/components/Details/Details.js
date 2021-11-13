import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "./../../hooks/useFirebase";
const Details = () => {
  const [service, setService] = useState({});
  const { user } = useFirebase();
  const { serviceId } = useParams();
  // console.log(serviceId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("https://polar-cliffs-75761.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  useEffect(() => {
    fetch(`https://polar-cliffs-75761.herokuapp.com/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-100" src={service.image} alt="" />
            <h4 className="text-start m-3">{service?.name}</h4>
            <h4 className="text-end mb-3"> ${service?.price}</h4>
            <p>{service?.description}</p>
            
            
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input
                {...register("name")}
                placeholder="Name"
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              /> */}
              <input
                {...register("name")}
                placeholder="Name"
                
                defaultValue={service?.name}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("email")}
                placeholder="Email"
                
                defaultValue={user?.email}
                className="p-2 m-2 w-100 input-field"
              />
              {/* <input
                {...register("name")}
                placeholder="Name"
                
                defaultValue={user?.Name}
                className="p-2 m-2 w-100 input-field"
              /> */}

              

              <input
                {...register("city")}
                placeholder="Your City"

                className="p-2 m-2 w-100 input-field"
              /> 

              <input
                {...register("address")}
                
                placeholder="Address"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("phone")}
                placeholder="Phone Number"
               
                type="number"
                className="p-2 m-2 w-100 input-field"
              />

              

              {/* <select {...register("model")} className="p-2 m-2 w-100">
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br /> */}
{/* 
              {errors.exampleRequired && <span>This field is required</span>} */}

              {/* costom */}
              {/* <input defaultValue={user.email} {...register("email", { required: true })} /> */}

                {/* {errors.email && <span className="error">This field is required</span>} */}


                {/* <input placeholder="Address" defaultValue="" {...register("address")} /> */}


                {/* <input placeholder="City" defaultValue="" {...register("city")} /> */}


                {/* <input placeholder="phone number" defaultValue="" {...register("phone")} />
               */}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
