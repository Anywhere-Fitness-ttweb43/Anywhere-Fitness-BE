import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    font-family: sans-serif;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Container = styled.div`
    margin: 1rem 0 1rem 0;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    a {
        text-decoration: none;
        color: #000;
        border: 2px solid #000;
        padding: 1rem;
        border-radius: 15px;
    }
`;

const HomePage = () => {
    return (
        <Wrapper>

            <Main>
                {/* random filler image */}
                <Container className='image-and-title'>
                    <img src='https://picsum.photos/1920/1080' alt='filler' width='720'/>
                    <p>Anywhere fitness Bacon ipsum dolor amet meatball shank ham strip steak flank
                    tail rump beef burgdoggen. Pork chop salami flank drumstick ham short loin tri-tip 
                    chislic venison pig biltong. T-bone pork belly meatloaf, sausage tail chuck biltong rump 
                    alcatra beef ribs turkey. Turkey leberkas biltong, corned beef kevin jerky rump flank landjaeger chicken 
                    shank. Andouille beef tenderloin doner turkey.</p>
                    <div>
                        <Link to='/all'>All Classes</Link>
                        <Link to='/search'>Search</Link>
                    </div>
                </Container>
                
            </Main>


        </Wrapper>
    )
}

export default HomePage