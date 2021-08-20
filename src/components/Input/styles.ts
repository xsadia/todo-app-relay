import styled, { css } from "styled-components";

type ContainerProps = {
    isErrored: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--relay-orange);
    padding: 6px;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: red;
    `}
`;

export const IconContainer = styled.div<ContainerProps>`
    display: flex;
    border-right: 1px solid var(--relay-orange);
    padding-right: 4px;
    color: var(--relay-orange);

    ${props => props.isErrored && css`
        color: red;
        border-color: red;
    `}
`;

export const CustomInput = styled.input`
    width: 100%;
    font-weight: 500;
    outline: none;
    border: none;
    margin-left: 4px;
`;