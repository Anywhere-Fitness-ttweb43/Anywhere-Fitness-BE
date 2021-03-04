import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from './axiosWithAuth'

// const dummyData = [
//     {
//         name: 'Fitness Class',
//         type: 'Running',
//         startTime: '8pm',
//         duration: '1hour',
//         intensityLevel: '5',
//         location: 'Denver',
//         registered: '6',
//         maxRegiter: '10',
//     },
//     {
//         name: 'Fitness Class',
//         type: 'Running',
//         startTime: '8pm',
//         duration: '1hour',
//         intensityLevel: '5',
//         location: 'Denver',
//         registered: '6',
//         maxRegiter: '10',
//     },
//     {
//         name: 'Fitness Class',
//         type: 'Running',
//         startTime: '8pm',
//         duration: '1hour',
//         intensityLevel: '5',
//         location: 'Denver',
//         registered: '6',
//         maxRegiter: '10',
//     },
// ]

const Container = styled.div`
    font-family: sans-serif;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ClassInfo = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
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

const ClassCard = styled.div`
    color: #fff;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 20px;
    background: linear-gradient(180deg,#5c2e85 -12.68%,#762b85 51.91%,#5c2e85 111.27%);
    height: 50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const AllClasses = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/classes/all')
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
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
                                <h4>{data.name}</h4>
                            </div>
                            <ClassInfo>
                                <div>
                                    <p>Type: {data.type}</p>
                                    <p>Intensity: {data.intensity}</p>
                                </div>
                                <div>
                                    <p>Start Time: {data.startTime}</p>
                                    <p>Duration: {data.duration}</p>
                                </div>
                                
                                <div>
                                    <p>Location: {data.location}</p>
                                    <p>Students Registered: {data.registered}</p>
                                    <p>Max Students: {data.maxRegister}</p>
                                </div>
                                <div>
                                    <button>Register</button>
                                </div>
                            </ClassInfo>
                        </ClassCard>
                        )
                    })
                }
        </Container>
    )
}

export default AllClasses