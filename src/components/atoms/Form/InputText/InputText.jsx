import React from "react";

const style = {
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #ccc",
  padding: "10px",
  fontSize: "0.9rem",
  fontStyle: "italic",
  color: "var(--primary-color)",
};

const InputText = (props) => {
  const { invalid, value, onChange, name, customClass } = props;
  return (
    <>
      <input
        id={name}
        type="text"
        value={value}
        onChange={onChange}
        style={style}
        name={name}
        className={`${customClass ?? ''} ${invalid ? "invalid" : ""}`}
      />
    </>
  );
};

export default InputText;
