import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup.string()
                .required('username is required'),
    password: yup.string()
                .required('password is required')
                .min(8, 'password must be at least 8 characters')
});

export default loginSchema;