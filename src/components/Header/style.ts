import styled from "styled-components";

import { Link } from 'react-router-dom';

export const ContainerHeader = styled.div`
   
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;

export const Logo = styled.h1`
    font-size: 2rem;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
    display: flex;
    gap: 2rem;
`;

export const Li = styled.li`
    list-style: none;
`;

export const A = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    padding: 1.1rem;
    transition: all 1s ease; 

     &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
