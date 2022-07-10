import React from "react";

const style = {
  fontSize: "1.2rem",
  fontWeight: "500",
}

const Label = (props) => {
  const { children, invalid } = props;
  return (
       <label htmlFor="" style={style}>{props.children} </label>
  );
};

export default Label;
