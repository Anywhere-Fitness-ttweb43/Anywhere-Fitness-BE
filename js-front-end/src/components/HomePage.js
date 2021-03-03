import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    font-family: sans-serif;
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
`
const Container = styled.div`
    background: linear-gradient(180deg,#5c2e85 -12.68%,#762b85 51.91%,#5c2e85 111.27%);
    border: 4px solid #FCD900;
    border-radius: 2rem;
    margin: 1rem 0 1rem 0;
    padding: 2rem;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    a {
        text-decoration: none;
        color: #5c2e85;
        background-color: #FCD900;
        padding: 1rem;
        border-radius: 15px;
    }

    p {
        color: #fff;
        font-size: 2rem;
    }
`;

const ImageContainer = styled.div`
    background: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80')
        no-repeat center center fixed;
    object-fit: cover;
    height: 50%;
    width: 100%;
`

const HomePage = () => {
    return (
        <Wrapper>

            <ImageContainer>
            <Main>
                {/* random filler image */}
                <Container className='image-and-title'>
                    <p>Fitness. Anytime. Anywhere.</p>
                    <div>
                        <Link to='/all'>All Classes</Link>
                        <Link to='/search'>Search</Link>
                    </div>
                </Container>
                
            </Main>
            </ImageContainer>


        </Wrapper>
    )
}

export default HomePage