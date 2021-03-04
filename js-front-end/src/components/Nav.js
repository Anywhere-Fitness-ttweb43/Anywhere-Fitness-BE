import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from './axiosWithAuth'

const StyledNav = styled.nav`
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        text-decoration: none;
        color: #fff;
        padding: 1rem;
    }
`
const Header = styled.header`
    font-family: sans-serif;
    color: white;
    background-color: #3c3c3c;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const LogoDiv = styled.div`
    margin: 0 0 0 1rem; 
    width: 20%;
    a {
        text-decoration: none;
        color: #fff;
    }
`

const Nav = (props) => {
    const history = useHistory()

    const logout = () => {
        console.log('logout')
        axiosWithAuth().get('/logout')
        .then((res) => {
            console.log(res)
            localStorage.removeItem('token')
            history.push('/')
        })
        .catch((err) => {
            console.log({err})
        })
    }

    return (
        <Header>
            <LogoDiv><Link to='/'><h2>Anywhere Fitness</h2></Link></LogoDiv>
            <StyledNav>
                <Link to='/all'>All Classes</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
                <button onClick={logout}>Logout</button>
            </StyledNav>
        </Header>
    )
}

export default Nav