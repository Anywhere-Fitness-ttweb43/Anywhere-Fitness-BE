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

const ClassCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid black;
    p {
        padding: 1rem;
    }
`
const Container = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
                            <p>Type: {data.type}</p>
                            <p>Start Time: {data.startTime}</p>
                            <p>Duration: {data.duration}</p>
                            <p>Intensity: {data.intensityLevel}</p>
                            <p>Location: {data.location}</p>
                            <p>Students Registered: {data.registered}</p>
                            <p>Max Students: {data.maxRegiter}</p>
                        </ClassCard>
                        )
                    })
                }
        </Container>
    )
}

export default AllClasses