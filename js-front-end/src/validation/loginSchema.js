import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string()
                .email()
                .required('email is required'),
    password: yup.string()
                .required('password is required')
                .min(8, 'password must be at least 8 characters')
});

export default loginSchema;