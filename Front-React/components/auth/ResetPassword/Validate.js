

export default function Validate(Inputs) {
  let errors = {};

  //EMAIL
  if (!Inputs.email) {
    errors.email = "error";
  } else if (!/\S+@\S+\.\S+/.test(Inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
    
  }

  return errors;
}