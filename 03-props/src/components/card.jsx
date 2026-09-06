import React from 'react'

const card = (props) => {

     console.log(props);
   
  return (
   
      <div className="card">
        <img src={props.img} alt="Profile Image"/>
        <h1>{props.user}, {props.age}</h1>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <button>view profile</button>
      </div>
   
  )
}

export default card
