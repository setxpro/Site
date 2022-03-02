import styled from 'styled-components';

export const FooterArea = styled.div`
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;

    background: ${props => props.theme.colors.primary};
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

`;