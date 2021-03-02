import axios from 'axios'
import React, { useState } from 'react'
import * as yup from 'yup'
import searchSchema from '../validation/searchSchema'

const dummyData = [
    {
        type: 'Running',
        startTime: '8pm',
        duration: '1hour',
        intensityLevel: '5',
        location: 'Denver',
        registered: '6',
        maxRegiter: '10',
    },
    {
        type: 'Running',
        startTime: '8pm',
        duration: '1hour',
        intensityLevel: '5',
        location: 'Denver',
        registered: '6',
        maxRegiter: '10',
    },
    {
        type: 'Running',
        startTime: '8pm',
        duration: '1hour',
        intensityLevel: '5',
        location: 'Denver',
        registered: '6',
        maxRegiter: '10',
    },
]

const Search = (props) => {
    const initialErrors = {
        TimeSearch: '',
        DateSearch: '',
        DurationSearch: '',
        TypeSearch: '',
        IntensitySearch: '',
        LocationSearch: ''
    }

    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('')
    const [classData, setClassData] = useState([])
    const [errors, setErrors] = useState(initialErrors)

    const changeSearchBy = (e) => {
        const { value } = e.target
        
        setSearchBy(value)
        setSearchTerm('')
    }

    const validateSearch = (name, value) => {
        const schemaToUse = chooseSchema(searchBy)
		yup.reach(schemaToUse, name)
			.validate(value)
			.then(valid => setErrors(initialErrors))
			.catch(err => setErrors({...errors, [name]: err.errors[0]}))
	}

    // choose which schema to use based on the chosen searchBy
    const chooseSchema = (type) => {
        switch(type){
            case 'Time':
                return searchSchema.time
            case 'Date':
                return searchSchema.date
            case 'Duration':
                return searchSchema.duration
            case 'Type':
                return searchSchema.types
            case 'Intensity':
                return searchSchema.intensity
            case 'Location':
                return searchSchema.location
            default:
                return;
        }
    }

    const changeTerm = (e) => {
        const { value, name } = e.target
        validateSearch(name, value)
        setSearchTerm(value)
    }

    const search = (e) => {
        e.preventDefault()
        const lowercaseSearchTerm = searchBy.toLowerCase()
        const url = `localhost:2019/classes/${lowercaseSearchTerm}`
        axios.get(url)
            .then(res => setClassData(res.data))
            .catch(err => console.log(err))
            // finally to set dummy data for now.
            .finally(setClassData(dummyData))
    }

    return (
        <>
            <h1>Search</h1>
            <form onSubmit={search}>
                <label>Search By {searchBy}
                    <select onChange={changeSearchBy} value={searchBy}>
                        <option name='' value=''>Select</option>
                        <option name='Time' value='Time'>Time</option>
                        <option name='Date' value='Date'>Date</option>
                        <option name='Duration' value='Duration'>Duration</option>
                        <option name='Type' value='Type'>Type</option>
                        <option name='Intensity' value='Intensity'>Intensity</option>
                        <option name='Location' value='Location'>Location</option>
                    </select>
                </label>
                {
                    searchBy ? 
                    <>
                    <input
                        type='text'
                        name={`${searchBy}Search`}
                        placeholder={searchBy}
                        value={searchTerm}
                        onChange={changeTerm}
                    /> 
                    <button>Search</button>
                    </>
                    : null
                }
                
            </form>
            <div>
                <p>{errors.TimeSearch}</p> 
                <p>{errors.DateSearch}</p> 
                <p>{errors.DurationSearch}</p> 
                <p>{errors.TypeSearch}</p>
                <p>{errors.IntensitySearch}</p> 
                <p>{errors.LocationSearch}</p>
            </div>

            {
                classData.map((data, i) => {
                    return (
                    <div key={i}>
                        <p>Type: {data.type}</p>
                        <p>Start Time: {data.startTime}</p>
                        <p>Duration: {data.duration}</p>
                        <p>Intensity: {data.intensityLevel}</p>
                        <p>Location: {data.location}</p>
                        <p>Students Registered: {data.registered}</p>
                        <p>Max Students: {data.maxRegiter}</p>
                    </div>
                    )
                })
            }
        </>
    )
}

export default Search