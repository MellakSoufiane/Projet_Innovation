import React from "react";

export default function ValidateInfo(Inputs) {
  let errors = {};

  //NAME
  if (!Inputs.name.trim()) {
    errors.name = "error";
  } else {
    errors.name = "success";
  }

 

  //EMAIL
  if (!Inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(Inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }


  //PASSWORD
  if (!Inputs.password) {
    errors.password = "error";
  } else if (Inputs.password.length < 6) {
    errors.password = "error";
  } else {
    errors.password = "success";
  }

  

  return errors;
}