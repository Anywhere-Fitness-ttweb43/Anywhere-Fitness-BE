//worked on by Anas Abdelsalam
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import {axiosWithAuth} from "./axiosWithAuth";
import classSchema from "../validation/classSchema"
import styled from 'styled-components'


const theDate = new Date();
const initialNewClass = {
    name: "",
    sTime: null, 
    duration: 0,
    date: theDate.toISOString().slice(0,10),
    type: "", 
    intensity: "", 
    location: "",
    // cSize: 0, for current size of class (unused)
};

const initialNewClassErrors = {
    name: "",
    sTime: "", 
    duration: "",
    date: "",
    type: "", 
    intensity: "",
    location: "",
    // cSize: "", current size of class (unused)
};

const initialDisabled = true;

const STFormContain = styled.div`
        width: 40%;
        margin: auto;
        background: purple;
        border-radius: 20px;
        border: 5px solid gold;
        margin-top:1%;
        margin-bottom:1%;`

    const STErrors = styled.div`
        display:flex;
        flex-direction:column;
        text-align:center;
        padding:1.2rem;
        font-family:sans-serif;
        font-weight:600;
        font-size:1.2rem;
        justify-content:center;
        align-items:center;
        color: red;`

    const STForm = styled.form`

        padding:4rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        box-sizing:border-box;
        position:relative;
        left:-5px;

    & label{
        font-weight:600;
        color: gold;
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
        text-align: center;
        
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
        text-align: center;



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
    
    }`

    const STH2 = styled.h2`
        color:gold;
        font-size: 3rem;
        font-weight:bold;
        margin: 0;
    `
    

export default function NewClass(props){

    const [newClass, setNewClass] = useState(initialNewClass);
    const [newClassErrors, setNewClassErrors] = useState(initialNewClassErrors);
    const [isDisabled, setIsDisabled] = useState(initialDisabled);
    const timeArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    const formattingDate = (date) => {
        //this formats the date to match what the backend is expecting
        let newDate = date.split("-");
        let expectedDate = [newDate[2],newDate[1],newDate[0]].join("-");
        return expectedDate;
    }

    const newClassUpdate = (name, value) => {
        yup.reach(classSchema, name)
            .validate(value)
            .then(()=>{
                setNewClassErrors({...newClassErrors, [name]: ""})
            })
            .catch((err)=>{
                setNewClassErrors({...newClassErrors, [name]: err.errors[0]})
            })
        setNewClass({...newClass, [name]:value})
    };

    const postNewClass = (newClass) => {
        console.log(newClass)
        axiosWithAuth().post("/classes/class", newClass)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log({err})
            })
    };

    const newClassSubmit = () => {
        const shapedNewClass = {
            /*
                /time: need to know what it is expecting
                /date: use this string to fit the expected shape formattingDate(newClass.date)
                /length
                /type
                /intensity
                /location  
            */

        
            "name": newClass.name,
            "time": newClass.sTime,
            "date": formattingDate(newClass.date),
            "duration": newClass.duration,
            "type": newClass.type,
            "intensity": newClass.intensity,
            "location": newClass.location
        
        }
        postNewClass(shapedNewClass)
        setNewClass(initialNewClass)
    };

    const newClassSubmission = (event) => {
        event.preventDefault()
        newClassSubmit();
    };

    const onChange = (event) => {
        const {name, value} = event.target
        newClassUpdate(name, value)
    };

    useEffect(()=>{
        classSchema.isValid(newClass)
          .then((valid)=>{
            setIsDisabled(!valid)
          })
      }, [newClass])


    
    return (
        <STFormContain className="newClassForm">
            <STForm className="newClassForm-container" onSubmit={newClassSubmission}>
                <STH2>Setup a new class</STH2>

                <STErrors className="errors-container">
                    <div>{newClassErrors.name}</div>
                    <div>{newClassErrors.duration}</div>
                    <div>{newClassErrors.intensity}</div>
                    {/* <div>{newClassErrors.mSize}</div> */}
                    <div>{newClassErrors.sTime}</div>
                    <div>{newClassErrors.type}</div>
                    <div>{newClassErrors.location}</div>
                    <div>{newClassErrors.date}</div>
                </STErrors>
                

                <label>Name: 
                    <input 
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={newClass.name}
                    />
                </label>

                <label>Duration(minutes): 
                    <input 
                        type="number"
                        name="duration"
                        onChange={onChange}
                        value={newClass.duration}
                    />
                </label>

                <label>Intensity: 
                    <select value={newClass.intensity} name="intensity" onChange={onChange}>
                        <option value="">---Intensity---</option>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                        <option value="0">0</option>
                    </select>
                </label>

                {/* <label>Max Class Size: 
                    <input 
                        type="number"
                        name="mSize"
                        onChange={onChange}
                        value={newClass.mSize}
                    />
                </label> */}

                <label>Start Time: 
                    <select value={newClass.sTime} name="sTime" onChange={onChange}>
                        <option value="">---Select A Time---</option>
                        {timeArray.map((time)=>{
                            return (
                                <option value={time}>{time === 0 ? `12:00 am` : time < 10 ? `0${time}:00 am` : time < 12 ? `${time}:00 am` : time === 12 ? `${time}:00 pm` : time > 12 ? `${time-12 < 10 ? "0"+(time-12) : time-12}:00 pm` : null}</option>
                            )
                        })}
                    </select>
                </label>

                <label>Type: 
                    <input 
                        type="text"
                        name="type"
                        onChange={onChange}
                        value={newClass.type}
                    />
                </label>

                <label>Location: 
                    <input 
                        type="text"
                        name="location"
                        onChange={onChange}
                        value={newClass.location}
                    />
                </label>

                <label>Date: 
                    <input 
                        type="date"
                        name="date"
                        onChange={onChange}
                        value={newClass.date}
                    />
                </label>

                <button disabled={isDisabled}  id="submit">SUBMIT</button>
            </STForm>
        </STFormContain>
    )
}