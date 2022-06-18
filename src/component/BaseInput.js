import React from "react";

const BaseInput = ({ classlist, type, name, placeholder, value, onChange }) => {
  return (
    <>
      <input
        className={classlist}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default BaseInput;
