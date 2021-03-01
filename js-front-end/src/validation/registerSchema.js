import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    fname: Yup.string()
                .required('First name field is required')
                .min(2,'First name must be at least 2 characters'),
    lname: Yup.string()
                .required('Last name field is required')
                .min(2,'Last name must be at least 2 characters'),
    email: Yup.string()
                .required('Email field is required')
                .email('Must enter valid email'),
    usertype: Yup.string()
                .required('Must select an option')
                .oneOf(['instructor','student']),
    password: Yup.string()
                .required('Password field is required')
                .min(8,'Password must be at least 8 character'),
    
})

export default registerSchema