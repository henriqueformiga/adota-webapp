import React from "react";

const Legend = (props) => {

  return (
    <>
      {props.errors?.length
        ? <small style={{color: 'var(--danger-color)'}}> {props.errors[0]}</small>
        : <small>{props.children}</small>
      }

    </>
  );
};

export default Legend;
