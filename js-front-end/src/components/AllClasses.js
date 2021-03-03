import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
    font-family: sans-serif;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
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

const AllClasses = (props) => {
    const [data, setData] = useState(dummyData)

    useEffect(() => {
        axios.get('localhost:2019/classes/all')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>All Classes</h1>
                {
                    data.map((data, i) => {
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

export default AllClasses