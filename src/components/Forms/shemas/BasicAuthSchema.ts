import * as Nope from "nope-validator";

export const BasicAuthSchema = Nope.object().shape({
  login: Nope.string()
    .required("Login is required.")
    .greaterThan(2, "Enter 3 to 15 letters.")
    .lessThan(16, "Enter 3 to 15 letters.")
    .regex(/^[^0-9!"@#;:%^&*()=+\\/]+$/, "Only letters, please."),
  password: Nope.string()
    .required("Password is required.")
    .greaterThan(3, "Enter 4 to 21 characters.")
    .lessThan(21, "Enter 4 to 21 characters."),
});
