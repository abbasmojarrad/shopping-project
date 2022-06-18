import React from "react";
import { Link } from "react-router-dom";

const EmptyCartDetail = ({title,classlist}) => {
  return (
    <div className={classlist}>
      <h3>{title}</h3>
      <Link to="/product">shop</Link>
    </div>
  );
};

export default EmptyCartDetail;
