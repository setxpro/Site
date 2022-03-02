import React, { useContext } from 'react';

import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { ContainerHeader, Logo, Nav, Ul, Li, A } from './style';

interface Props {
    toggleTheme(): void;
}


const Header: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <ContainerHeader>
            <Logo>DevTwo</Logo>
            <Nav>
                <Ul>
                    <Li>
                        <A to="/">Home</A>
                    </Li>
                    <Li>
                        <A to="/about">About</A>
                    </Li>
                    <Li>
                        <A to="/tecnology">Tecnology</A>
                    </Li>
                    <Li>
                        <A to="/work">Work</A>
                    </Li>
                    <Li>
                        <A to="/contact">Contact</A>
                    </Li>
                </Ul>
            </Nav>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.background}
            />
        </ContainerHeader>
    );
}

export default Header;