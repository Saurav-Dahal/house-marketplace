import * as yup from "yup";

const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";

const BasicSchema = yup.object().shape({
    name:yup.string().min(3, 'Too short').required('Name is required'),
    email:yup.string().email("Please enter a valid email").required('Email is required'),
    password:yup.string().min(8, 'Too short')
    // .matches(passwordRules, 'Please include atleast 1 uppercase, 1 lowercase and 1 numeric digit')
    .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password must match").required('Confirm Password is required'),
});

export default BasicSchema;