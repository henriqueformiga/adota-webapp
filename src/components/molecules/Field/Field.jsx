import React, { useState } from "react";
import { Validators } from "../../../utils/validators";
import InputText from "../../atoms/Form/InputText/InputText";
import Label from "../../atoms/Form/Label/Label";
import Legend from "../../atoms/Form/Legend/Legend";

const Field = (props) => {
  const [value, setValue] = useState(props.value || "");
  const [errors, setErrors] = useState(props.errors || []);
  const [invalid, setInvalid] = useState(false);
  const { name, label, onChange, legend, validators } = props;

  const changeHandler = (e) => {
    const resultErros = Validators.validateAll(validators, e.target.value);
    console.log("Erros no change: ", errors);
    setErrors(resultErros);
    setInvalid(resultErros?.length > 0);
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "10px 5px" }}>
      <Label invalid={invalid}>{label || "Insira o label"}</Label>
      <div style={{ marginTop: "10px", marginBottom: "2px" }}>
        <InputText
          invalid={invalid}
          value={value}
          onChange={changeHandler}
          name={name}
        ></InputText>
      </div>
      <Legend errors={errors}>{legend ?? ''}</Legend>
    </div>
  );
};

export default Field;
