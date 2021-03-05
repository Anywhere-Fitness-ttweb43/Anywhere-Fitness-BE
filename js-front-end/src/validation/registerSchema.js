import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    "username": Yup.string()
                .required('First name field is required')
                .min(2,'First name must be at least 2 characters'),
    "primaryemail": Yup.string()
                .required('Email field is required')
                .email('Must enter valid email'),
    "roles": Yup.array().of(Yup.object().shape({
        "role": Yup.object().shape({
            "roleid": Yup.string().required().oneOf(['1','2'],'Must select an option')
        })
    }), "please select one"),
    "password": Yup.string()
                .required('Password field is required')
                .min(8,'Password must be at least 8 character'),
    
})

export default registerSchema