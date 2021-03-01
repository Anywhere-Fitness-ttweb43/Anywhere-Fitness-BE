import React, {useState,useEffect} from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import registerSchema from '../validation/registerSchema'

const Register = (props)=>{

    const initialCreds={
        fname:'',
        lname:'',
        usertype:'',
        email:'',
        password:'',
    }

    const initialErrs={
        fname:'',
        lname:'',
        usertype:'',
        email:'',
        password:'',
    }

    const [formCreds,setFormCreds]=useState(initialCreds)
    const [errs,setErrs]=useState(initialErrs)
    const [disabled, setDisabled]= useState(true)

    const onChange = (e)=>{
        const{name,value}=e.target
        Yup.reach(registerSchema,name)
            .validate(value)
            .then(()=> setErrs({...errs, [name]:''}))
            .catch(err=>setErrs({...errs, [name]:err.errors[0]}))
        setFormCreds({...formCreds,[name]:value})

    }

    const onSubmit=(e)=>{
        e.preventDefault()
        // axios
		// 	.post(
		// 		"https://jrmmba-foundation.herokuapp.com/login",
		// 		`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
		// 		{
		// 			headers: {
		// 				// btoa is converting our client id/client secret into base64
		// 				Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
		// 				"Content-Type": "application/x-www-form-urlencoded",
		// 			},
		// 		},
		// 	)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		localStorage.setItem("token", res.data.access_token);
		// 		props.history.push("/userinfo");
		// 	});
        setFormCreds(initialCreds)
    }

    useEffect(()=>{

        registerSchema.isValid(formCreds).then(valid=>setDisabled(!valid))

    },[formCreds])


    

    return(
        <div>
            <form onSubmit={onSubmit}>

                <label>
                    <input
                    placeholder='First Name'
                    name='fname'
                    value={formCreds.fname}
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>
                    <input
                    placeholder='Last Name'
                    name='lname'
                    value={formCreds.lname}
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>
                    <select name='usertype' onChange={onChange}>
                        <option>----Select One----</option>
                        <option value='instructor'>Instructor</option>
                        <option value='student'>Student</option>
                    </select>
                </label>

                <label>
                    <input
                    name='email'
                    placeholder='E-mail'
                    value={formCreds.email}
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>
                    <input
                    name='password'
                    placeholder='Password'
                    value={formCreds.password}
                    type='password'
                    onChange={onChange}
                    />
                </label>

                <button disabled={disabled}>Register</button>




            </form>

            <div>{errs.fname}</div>
            <div>{errs.lname}</div>
            <div>{errs.usertype}</div>
            <div>{errs.email}</div>
            <div>{errs.password}</div>
        </div>
    )
}

export default Register