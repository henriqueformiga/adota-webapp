import React from "react";
import Field from "../../components/molecules/Field/Field";
import { Validators } from "../../utils/validators";

const Fields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
    maxLength: 5,
    validators: [Validators.maxLength(5), Validators.required]
  },
  {
    label: "Perfil",
    name: "profile",
    type: "text",
    placeholder: "Enter your profile",
    required: true,
    maxLength: 50,
    validators: []
  },
]
const Register = () => {
  return (
    <>
      {Fields.map((field) => (
        <Field key={field.name} {...field} />
      ))}
    </>
  );
};

export default Register;
