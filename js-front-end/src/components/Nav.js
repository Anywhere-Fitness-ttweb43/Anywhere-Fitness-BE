import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from './axiosWithAuth'

const StyledNav = styled.nav`
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #fff;
        padding: 1rem;
    }

    div[id=logout] {
        margin-right: 2rem;

        button {
            text-decoration: none;
            color: #fff;
            padding: 1rem;
            background-color: transparent;
            border: none;
            font-size: 16px;
            :hover {
                cursor: pointer;
            }
        }
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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token') ? true : false)
    }, [])
        
    return (
        <Header>
            <LogoDiv><Link to='/'><h2>Anywhere Fitness</h2></Link></LogoDiv>
            <StyledNav>
                <div>
                    <Link to='/all'>All Classes</Link>
                    <Link to='/newClass'>New Class</Link>
                </div>
                <div>
                    <Link to='/login'>Log In</Link>
                    <Link to='/register'>Register</Link>
                </div>
                <div id='logout'>
                    <button onClick={logout}>Logout</button>
                </div>
            </StyledNav>
        </Header>
    )
}

export default Nav