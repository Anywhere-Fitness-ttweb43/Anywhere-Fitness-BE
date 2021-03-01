//worked on by Anas Abdelsalam
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import classSchema from "../validation/classSchema"


const initialNewClass = {
    name: "",
    sTime: 0, 
    duration: 0,
    date: new Date(),
    type: "", 
    intensity: "", 
    location: "",
    // cSize: 0, for current size of class (unused)
    mSize: 0,
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
    mSize: "",
};

const initialDisabled = true;

export default function NewClass(props){

    const [newClass, setNewClass] = useState(initialNewClass);
    const [newClassErrors, setNewClassErrors] = useState(initialNewClassErrors);
    const [isDisabled, setIsDisabled] = useState(initialDisabled);

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
        axios.post("https://reqres.in/api/users", newClass)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    };

    const newClassSubmit = () => {
        const shapedNewClass = {
            /*
                /time: need to know what it is expecting
                /date: use this string to fit the expected shape `${(newClass.date.getDate()) < 10 ? "0"+(newClass.date.getDate()) : (newClass.date.getDate())}/${(newClass.date.getMonth()+1) < 10 ? "0"+ (newClass.date.getMonth()+1) : (newClass.date.getDate()+1)}/${newClass.date.getFullYear()}`
                /length
                /type
                /intensity
                /location  
            */
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

    return (
        <form className="newClassForm-container" onSubmit={newClassSubmission}>
            <div className="newClassForm">
                <h2>Setup a new class</h2>

                <div class="errors-container">
                    <div>{newClassErrors.name}</div>
                    <div>{newClassErrors.duration}</div>
                    <div>{newClassErrors.intensity}</div>
                    <div>{newClassErrors.mSize}</div>
                    <div>{newClassErrors.sTime}</div>
                    <div>{newClassErrors.type}</div>
                    <div>{newClassErrors.location}</div>
                    <div>{newClassErrors.date}</div>
                </div>
                
                <div className="input-containers">
                    <label>Name: 
                        <input 
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={newClass.name}
                        />
                    </label>

                    <label>Duration: 
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
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>

                    <label>Max Class Size: 
                        <input 
                            type="number"
                            name="mSize"
                            onChange={onChange}
                            value={newClass.mSize}
                        />
                    </label>

                    <label>Start Time: 
                        <select value={newClass.sTime} name="sTime" onChange={onChange}>
                            <option value={0}>---Select A Time---</option>
                            {/* put in  the rest of the options*/}
                        </select>
                    </label>

                    <label>type: 
                        <input 
                            type="text"
                            name="type"
                            onChange={onChange}
                            value={newClass.type}
                        />
                    </label>

                    <label>location: 
                        <input 
                            type="text"
                            name="location"
                            onChange={onChange}
                            value={newClass.location}
                        />
                    </label>

                    <label>date: 
                        <input 
                            type="date"
                            name="date"
                            onChange={onChange}
                            value={newClass.date.toISOString.slice(0,10)}
                        />
                    </label>

                </div>
            </div>
        </form>
    )
}