import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email is invalid")
        .required("This field is required")
        .max(191, "Max length is 191 characters"),
    password: yup
        .string()
        .min(4, "Min length is 4 characters")
        .required("This field is required")
        .max(191, "Max length is 191 characters"),
});

export const registerSchema = yup.object().shape({
    firstName: yup.string().min(2, "Min length is 2 characters").required("This field is required"),
    lastName: yup.string().min(2, "Min length is 2 characters").required("This field is required"),
    email: yup
        .string()
        .email("Email is invalid")
        .required("This field is required")
        .max(191, "Max length is 191 characters"),
    password: yup
        .string()
        .min(4, "Min length is 4 characters")
        .required("This field is required")
        .max(191, "Max length is 191 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("This field is required"),
});
