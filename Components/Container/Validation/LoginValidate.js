const validateEmail = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// const validatePassword = RegExp(
//   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/
// );
export default function LoginValidate(value) {
  let errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  } else if (!validateEmail.test(value.email)) {
    errors.email = "Email is invalid";
  }

  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 8) {
    errors.password = "Password should contain minimum 8 characters ";
  }
  
  //  else if (!validatePassword.test(value.password)) {
  //   errors.password =
  //     "Password should contain one uppercase,lowercase,number and special character";
  // }
  return errors;
}
