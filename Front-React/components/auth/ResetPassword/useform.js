import React, { useState } from "react";

const useForm = validate => {
  const [Inputs, setInputs] = useState({ 
    email: "", 
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...Inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(Inputs));
  };

  return { handleChange, Inputs, handleSubmit, errors };
};

export default useForm;