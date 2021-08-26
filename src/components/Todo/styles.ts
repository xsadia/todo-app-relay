import styled, { css } from "styled-components";

type TodoContentContainerProps = {
    isCompleted: boolean;
};

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

export const TodoContainer = styled.div`
    display: flex;
`;

export const TodoContentContainer = styled.div<TodoContentContainerProps>`
    ${props => props.isCompleted && css`
        text-decoration: line-through;
    `}
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
        color: #ff0d0d;
    }
`;

export const CompleteTodoButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-right: 16px;
    font-size: 24px;
    color: var(--relay-orange);
    transition: color 0.2s;

    &:hover {
        color: #0bbf4a;
    }
`;