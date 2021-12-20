import React from 'react';
import { useState, useEffect } from 'react';
import './Postview.css';

// const fetchData = () => {
//   return fetch("http://localhost:3004/user")
//         .then((response) => response.json())
//         .then((data) => console.log(data));}
// fetchData();
var today = new Date();
const Postview=()=> {
  
  const [users, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://localhost:3004/user");
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []);
  

  return (
    <div>
    <h3></h3>

    {/* display books from the API */}
    {users && (
      <div className='site_container'>

        {/* loop over the books */}
        {users.map((user, index) => (
          <div className='newcontent' key={index}>
            <div className='head1'>
              <div className='optiontab'>...</div>
              <span><b>{user.name}</b><br></br>{user.location}</span>
            </div>
            <div className='imgcontent'>
              <img src={user.PostImage}></img>
            </div>
            <div className='likeshare'>
              <div className='like'><img src="https://cdn-icons.flaticon.com/png/128/2589/premium/2589197.png?token=exp=1639999064~hmac=161d1ba27cf4e973ecd6edde9e389f05"></img> <img src="https://cdn-icons-png.flaticon.com/128/786/786205.png"></img> <span>{today.getDate()}-{today.getMonth()}-{today.getFullYear()}</span></div>
            </div>
            <div className='likes'>{user.likes} likes</div>
            <div className='description'>{user.description}</div>
          </div>
        ))}

      </div>
    )}
  </div>
  );
}

export default Postview;
