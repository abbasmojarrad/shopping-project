import React from "react";

const DetailCard =({ style, heading, text , headingNumber }) =>{
  return (
    <div className={style}>
      <h2>{headingNumber}</h2>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

export default DetailCard;
