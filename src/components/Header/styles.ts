import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: var(--relay-orange);
    color: #fff;
    padding: 0 1%;
`;

export const NavButtonsContainer = styled.div`
    display: flex;
    width: 480px;
    justify-content: space-between;
`;

export const HeaderTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        margin: 4px 0 0 4px;
        font-size: 28px;
    }
`;

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #fff;
    font-size: 18.72px;
    font-weight: 500;
    transition: filter 0.2s;

    svg {
        margin: 2px 0 0 4px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;

export const NavUserGreeting = styled.span`
    color: #fff;
    font-size: 18.72px;
    font-weight: 500;
`;