import React, { useEffect, useState } from "react";
import useFirebase from "./../../hooks/useFirebase";

const MyBookings = () => {
  const { user } = useFirebase();
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setBooks(data));
  }, [user?.email]);

  const handleDelete = id => {
        
    fetch(`http://localhost:5000/myOrder/${id}`, {
        method : 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount){
            alert('deleted')
            const remaining = books.filter(book => book._id !==id);
            setBooks(remaining)
        }
        
    })
}

  return (
    <div className="row">
            
    <h1 className="text-center">All Orders</h1>

    {
                books.map(book => 
                    <div key={book._id}> 

                <div className="card">
                <div className="card-body">
                
                   
                    <p>{book?.name}</p> 
                    {/* <p>{book.email}</p> */}
                    <p>{book?.status}</p>
                    <p>{book?.city}</p>
                    

                    <button className="btn btn-danger" onClick={()=>handleDelete(book._id)}>delete book</button>
                    </div>
                    </div>
                    
                    </div>
                
              
                
                )
            }
</div>
  );
};

export default MyBookings;
