import React, {useState,useEffect} from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import registerSchema from '../validation/registerSchema'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const PageContainer=styled.div`
width:60%;
height:70vh;
margin:auto;
background: no-repeat url(https://www.wpxi.com/resizer/VwKKyZvgUAo78gGwj1gmR2MzU2M=/1200x675/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/BQ6QRWWQSJBQNL6NQ3NQO367II.jpg);
background-size:cover;
background-color: gray;
position:relative;
left:19%;

`


const FormContainer= styled.div`
border: 5px solid gold;
border-top:none;
width: 70%;

background: linear-gradient(180deg,#5c2e85 -12.68%,#762b85 51.91%,#5c2e85 111.27%);
border-radius: 0 0 20px 20px;
position:relative;
left:15%;


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
align-items:center;
color: gold;`

const StyledForm = styled.form`

padding:4rem;
display:flex;
flex-direction:column;
justify-content:center;
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
    letter-spacing:5px;
    font-weight:800;
    cursor:pointer;

&:disabled {
    opacity:.5

}
}





`

const Register = (props)=>{

    const history = useHistory()

    const initialCreds={
        "username": "",
        "password": "",
        "primaryemail": "",
        "roles": [
            {
                "role": {
                    "roleid": 1
                }
            }]
        }

    // const initialErrs={
    //     fname:'',
    //     lname:'',
    //     usertype:'',
    //     email:'',
    //     password:'',
    // }

    const [formCreds,setFormCreds]=useState(initialCreds)
    // const [errs,setErrs]=useState(initialErrs)
    const [disabled, setDisabled]= useState(true)

    const onChange = (e)=>{
        const{name,value}=e.target
        // Yup.reach(registerSchema,name)
        //     .validate(value)
        //     .then(()=> setErrs({...errs, [name]:''}))
        //     .catch(err=>setErrs({...errs, [name]:err.errors[0]}))
        setFormCreds({...formCreds,[name]:value})
       // console.dir(e.target)

    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formCreds)
        debugger;
        axios.post(`https://ttweb43-backendjava.herokuapp.com/createnewuser`, formCreds)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token)
            history.push('/all')
        })
        .catch((err) => {
            console.log({err})
        })
    }

    // useEffect(()=>{

    //     registerSchema.isValid(formCreds).then(valid=>setDisabled(!valid))

    // },[formCreds])


    

    return(

        <PageContainer>
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>

                <label><input
                    placeholder='Username'
                    name='username'
                    value={formCreds.username}
                    type='text'
                    onChange={onChange}
                    /></label>

                <label>
                    <select name='usertype' value={formCreds.roles[0].role.roleid} onChange={onChange}>
                        <option value=''>----Select One----</option>
                        <option value='1'>Instructor</option>
                        <option value='2'>Student</option>
                    </select>
                </label>

                <label>
                    <input
                    name='primaryemail'
                    placeholder='E-mail'
                    value={formCreds.primaryemail}
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

                <button >Register</button>




            </StyledForm>

            {/* <StyledErrors>
            <div>{errs.fname}</div>
            <div>{errs.lname}</div>
            <div>{errs.usertype}</div>
            <div>{errs.email}</div>
            <div>{errs.password}</div>
            </StyledErrors> */}
        </FormContainer>
        </PageContainer>
    )
}

export default Register