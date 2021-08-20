import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: var(--relay-orange);
    color: #fff;
    margin-top: 16px;
    padding: 8px;
    border-radius: 24px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;