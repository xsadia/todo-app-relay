import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid var(--relay-orange);
    background: #f6f8fa;
    padding: 16px;

    & + div {
        margin-top: 10px;
    }
`;

export const TodoContentContainer = styled.div`
    
`;

export const TodoContent = styled.h1`
    font-size: 24px;
    text-transform: capitalize;
`;

export const TodoDate = styled.h2`
    font-size: 16px;
`;

export const DeleteTodoButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 24px;
    font-weight: 600;
    color: var(--relay-orange);
    transition: color 0.2s;

    &:hover {
        color: red;
    }
`;