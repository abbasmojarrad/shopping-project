import React from "react";

const Loader = ({ classlist, gif }) => {
  return (
    <div className={classlist}>
      <img style={{ width: "120%" }} src={gif} alt="loading" />
    </div>
  );
};

export default Loader;
