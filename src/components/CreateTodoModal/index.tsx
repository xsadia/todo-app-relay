import Modal from 'react-modal';
import graphql from 'babel-plugin-relay/macro';
import { CloseModalButton, ModalForm, ModalFormInput, ModalFormLabel, SubmitModalButton } from './styles';
import { IoClose } from 'react-icons/io5';
import { useMutation, useQueryLoader } from 'react-relay';
import { CreateTodoModal_CreateTodoMutation } from './__generated__/CreateTodoModal_CreateTodoMutation.graphql';
import TodoListQuery, { TodoListQuery as TodolistQueryType } from '../TodoList/__generated__/TodoListQuery.graphql';
import { FormEvent, useCallback } from 'react';
import { useState } from 'react';
import { TodoQuery } from '../TodoList';

type CreateTodoModalProps = {
    isModalOpen: boolean;
    handleCloseModal: () => void;
};



export const CreateTodoModal = ({ handleCloseModal, isModalOpen }: CreateTodoModalProps) => {
    const [inputValue, setInputValue] = useState('');

    const [commit] = useMutation<CreateTodoModal_CreateTodoMutation>(
        graphql`
            mutation CreateTodoModal_CreateTodoMutation($input: CreateTodoInput!){
                CreateTodoMutation(input: $input) {
                    created
                    error
            }
        }
        `
    );

    const [_, loadQuery] = useQueryLoader<TodolistQueryType>(
        TodoListQuery,
        TodoQuery
    );

    const refresh = useCallback(() => {
        loadQuery({}, { fetchPolicy: 'network-only' });
    }, [loadQuery]);

    const handleSumit = (event: FormEvent) => {
        event.preventDefault();
        commit({
            variables: {
                input: {
                    content: inputValue
                }
            },
            onCompleted() {
                handleCloseModal();
                refresh();
                setInputValue('');
            }
        });
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <ModalForm onSubmit={handleSumit}>
                <CloseModalButton
                    type="button"
                    onClick={() => handleCloseModal()}
                >
                    <IoClose />
                </CloseModalButton>
                <div>
                    <ModalFormLabel>Create Todo</ModalFormLabel>
                    <ModalFormInput
                        placeholder="Todo content"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}

                    />
                </div>
                <SubmitModalButton type="submit" >Submit</SubmitModalButton>
            </ModalForm>
        </Modal>
    );
};;;