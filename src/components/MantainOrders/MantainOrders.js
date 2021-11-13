
import React, { useEffect, useState } from 'react';
import './MantainOrders.css'

const MantainOrders = () => {
    const [mantains, setMantains] = useState([]);
    useEffect(()=>{
        fetch('https://polar-cliffs-75761.herokuapp.com/allServices')
    .then(res => res.json())
    // .then(data => setMantains(data.products))
    .then(data => setMantains(data))
    },[])

    const handleDelete = id => {

        const url = `https://polar-cliffs-75761.herokuapp.com/allServices/${id}`;
        fetch(url,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('delete successfully')

                const remaining = mantains.filter(inventory => inventory._id !== id);
            setMantains(remaining);
            }

            
        })
    }
    return (
        <div className="row">
            <h2 className="text-center mb-5">Manage All Packages</h2>

        {
            mantains.map(mantain => <div
                className="col-md-6" 
            key={mantain._id}>

                <div className="col">
                    <div className="card">
                    <img className="img-fluid" src={mantain.image} alt="" />
                    <div className="card-body d-flex justify-content-between">
                <p>{mantain.name}</p>

                <button className="butnn btn" onClick={()=> handleDelete(mantain._id)}>remove</button>
                </div>
               
                </div>
                
                </div>
                
            </div>)
        }
       
        </div>
    );
};

export default MantainOrders;