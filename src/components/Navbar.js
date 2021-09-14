import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'


const Nav = styled.nav`
    height:60px;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    font-size: clamp(0.8rem, 6vw, 1.5rem);
`;

const NavLink = css`
    color:white;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height:100%;
    cursor: pointer;
    text-decoration:none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style:italic;
`;

const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        align-self:center;
        cursor: pointer;
        color:white; 
    }
`;

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
    
    @media screen and (max-width: 768px){
        display:none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">BTHOUSE</Logo>
            <MenuBars size='26px' onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index)=>(
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to="/content" primary='true'>
                        Contact us!
                    </Button>
                </NavBtn>
        </Nav>
    )
}

export default Navbar
