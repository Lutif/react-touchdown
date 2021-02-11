import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter your name.").label("First Name"),
  lastName: Yup.string().required("Enter your last name.").label("Last Name"),
  companyName: Yup.string()
    .required("Enter your company name.")
    .label("Last Name"),
  email: Yup.string().email().required("Email is required.").label("Email"),
  password: Yup.string()
    .required("Enter your password")
    .min(8)
    .label("Password"),
  passwordRepeat: Yup.string()
    .required("Enter your password again")
    .min(8)
    .label("Password")
    .test("password-match", "Confirm password must match", function (value) {
      return this.parent.password === value;
    }),
});
