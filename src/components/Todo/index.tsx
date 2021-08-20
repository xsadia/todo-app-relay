import graphql from 'babel-plugin-relay/macro';
import { useFragment, useMutation } from "react-relay";
import { Container, DeleteTodoButton, TodoContent, TodoContentContainer, TodoDate } from './styles';
import { Todo_todo$key } from './__generated__/Todo_todo.graphql';
import { Todo_DeleteTodoMutation } from './__generated__/Todo_DeleteTodoMutation.graphql';
import { IoClose } from 'react-icons/io5';

type TodoListProps = {
    query: Todo_todo$key;
    refresh: () => void;
};

export const Todo = ({ query, refresh }: TodoListProps) => {
    const data = useFragment<Todo_todo$key>(
        graphql`
            fragment Todo_todo on Todo {
                id
                content
                isCompleted
                createdAt
            }
        `,
        query
    );

    const [commitDelete] = useMutation<Todo_DeleteTodoMutation>(
        graphql`
            mutation Todo_DeleteTodoMutation($input:DeleteTodoInput!) {
                DeleteTodoMutation(input: $input) {
                    success
                    error
                }
            }
        `
    );

    const handleDeleteTodo = () => {
        commitDelete({
            variables: {
                input: {
                    id: data.id
                }
            },
            onCompleted() {
                refresh();
            }
        });
    };

    return (
        <Container>
            <TodoContentContainer>
                <TodoContent>{data.content}</TodoContent>
                <TodoDate>{new Date(Number(data.createdAt)).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                })}
                </TodoDate>
            </TodoContentContainer>
            <DeleteTodoButton onClick={() => handleDeleteTodo()}>
                <IoClose />
            </DeleteTodoButton>
        </Container>
    );
};