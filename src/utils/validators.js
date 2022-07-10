export const Validators = {
  validateAll: (validators, currentValue) => {
    if (Array.isArray(validators)) {
      return validators.reduce((errors, validator) => {
        const result = validator(currentValue);
        if (result) return [...errors, result];
        return errors;
      }, []);
    }
    return null
  },
  required: (value) => {
    if (typeof value === "boolean" || typeof value === "number") {
      return null;
    }
    if (value === undefined || value === null ||
      (typeof value === "string" && value.trim() === "")) {
      console.log('Value on validate', value);
      return "Este campo é obrigatório";
    }
  },
  maxLength: (maxLength) => (value) => {
    if (value?.length > maxLength) {
      return `Este campo deve conter até ${maxLength} caracteres`;
    }
    return undefined;
  },
};
