import styled from "styled-components";

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ModalFormInput = styled.input`
    width: 100%;
    background: #f6f8fa;
    outline: none;
    padding: 4px 16px;
    font-weight: 500;
    border-radius: 24px;
    border: 2px solid var(--relay-orange);
`;

export const ModalFormLabel = styled.label`
    font-size: 24px;
    font-weight: 500;
`;

export const SubmitModalButton = styled.button`
    border: none;
    width: 100%;
    background: var(--relay-orange);
    padding: 8px;
    color: #fff;
    margin-top: 8px;
    border-radius: 24px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const CloseModalButton = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    color: var(--relay-orange);
    font-size: 16px;

    &:hover {
        filter: brightness(0.8);
    }
`;