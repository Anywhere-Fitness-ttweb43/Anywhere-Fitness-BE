import React, {useState,useEffect} from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import registerSchema from '../validation/registerSchema'
import styled from 'styled-components'


const FormContainer= styled.div`
width: 40%;
margin: auto;
background: purple;
border-radius: 0 0 20px 20px;


`
const StyledErrors = styled.div`
display:flex;
flex-direction:column;
text-align:center;
padding:1.2rem;
font-family:sans-serif;
font-weight:600;
font-size:1.2rem;
justify-content:center;
align-item:center;
color: gold;`

const StyledForm = styled.form`

padding:4rem;
display:flex;
flex-direction:column;
justify-conent:center;
align-items:center;
box-sizing:border-box;
position:relative;
left:-5px;

& label{

    width:80%;
    box-sizing:border-box;
    display:block;
    
    
}

& input{
    width: 100%;
    display:block;
    font-size:1.2rem;
    border-radius: 15px;
    padding: .5rem;
    box-sizing:border-box;
    outline:none;
    border: solid 2px purple;
    margin: .5rem;
    font-weight:600;
    
    & :active{
        border: solid 2px yellow;
    }
}

& select {
    width:100%;
    padding:.5rem;
    border-radius:15px;
    margin:.5rem;
    outline:none;
    font-weight:600;
    font-size:1.2rem;
    border: solid 2px purple;



}

& button{
    width:70%;
    right: -5px;
    position:relative;
    padding:.5rem;
    font-size:1.2rem;
    margin:.5rem;
    border-radius:15px;
    border:none;
    outline:none;
    background: gold;
    color:purple;
    text-transform: uppercase;
    leter-spacing:5px;
    font-weight:800;
    cursor:pointer;

&:disabled {
    opacity:.5

}
}





`

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
        console.dir(e.target)

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
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>

                <label><input
                    placeholder='First Name'
                    name='fname'
                    value={formCreds.fname}
                    type='text'
                    onChange={onChange}
                    /></label>

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
                    <select name='usertype' value={formCreds.usertype} onChange={onChange}>
                        <option value=''>----Select One----</option>
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




            </StyledForm>

            <StyledErrors>
            <div>{errs.fname}</div>
            <div>{errs.lname}</div>
            <div>{errs.usertype}</div>
            <div>{errs.email}</div>
            <div>{errs.password}</div>
            </StyledErrors>
        </FormContainer>
    )
}

export default Register