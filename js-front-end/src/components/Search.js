import axios from 'axios'
import React, { useState } from 'react'
import * as yup from 'yup'
import searchSchema from '../validation/searchSchema'
import styled from 'styled-components'

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

const Container = styled.div`
    height: 100vh;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const FormContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem;
    background: linear-gradient(180deg,#5c2e85 -12.68%,#762b85 51.91%,#5c2e85 111.27%);
    color: #fff;
    border-radius: 8px;
    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        input {
            border-radius: 4px;
            border: none;
            height: 29px;
        }

        button {
            background-color: #FCD900;
            border-radius: 4px;
            border: none;
            margin-top: 0.5rem;
            height: 20px;
        }
    }
`

const SearchByContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    width: 100%;
`;

const ClassCard = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 50%;
    width: 30%;
    background: linear-gradient(180deg,#5c2e85 -12.68%,#762b85 51.91%,#5c2e85 111.27%);
    margin-top: 3rem;
    border-radius: 8px;
    padding: 20px;
    button {
        color: #5c2e85;
        padding: 5px;
        background-color: #FCD900;
        border-radius: 4px;
        border: none;
        margin-top: 0.5rem;
        height: 20px;
    }
`;


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
    const [classData, setClassData] = useState(dummyData)
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
        <Container>
            <FormContainer>
                <form onSubmit={search}>
                    <div>
                        <h1>Search</h1>
                        <label>Search By:
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
                    </div>
                    <SearchByContainer>
                    {
                        searchBy ? 
                        <>
                        <h2>Search By {searchBy}</h2>
                        <input
                            type='text'
                            name={`${searchBy}Search`}
                            placeholder={searchBy}
                            value={searchTerm}
                            onChange={changeTerm}
                        /> 
                        <button>Search</button>
                        </>
                        : <h2><span role='img' aria-label='search'>🔍</span>Search For Something</h2>
                    }
                    </SearchByContainer>
                    
                </form>
            </FormContainer>
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
                    <ClassCard key={i}>
                        <div>
                            <p>Type: {data.type}</p>
                            <p>Intensity: {data.intensityLevel}</p>
                        </div>
                        <div>
                            <p>Start Time: {data.startTime}</p>
                            <p>Duration: {data.duration}</p>
                        </div>
                        
                        <div>
                            <p>Location: {data.location}</p>
                            <p>Students Registered: {data.registered}</p>
                            <p>Max Students: {data.maxRegiter}</p>
                        </div>
                        <div>
                            <button>Register</button>
                        </div>
                        
                    </ClassCard>
                    )
                })
            }
        
        </Container>

    )
}

export default Search