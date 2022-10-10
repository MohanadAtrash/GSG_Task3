import React from "react";
export default function List(props) {

    const arr = props.item;
  
    return (
      <div className="flex-container ">
        <div className="flex-child">
          <h1>{props.name}</h1>
          <ul>
            {arr.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
        </div>
        
      </div>
    );
  }