import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required.").label("Email"),
  password: Yup.string()
    .required("Enter your password")
    .min(8)
    .label("Password"),
});
