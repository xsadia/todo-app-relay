import graphql from 'babel-plugin-relay/macro';
import { useCallback, useEffect } from 'react';
import { loadQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import RelayEnviroment from '../../relay/RelayEnviroment';
import { Todo } from '../Todo';
import { Container } from './styles';
import { TodoListQuery as TodolistQueryType } from './__generated__/TodoListQuery.graphql';
import TodoListQuery from './__generated__/TodoListQuery.graphql';
import { useHistory } from 'react-router-dom';

export const TodoQuery = graphql`
    query TodoListQuery {
        user {
            todos {
                edges {
                    node {
                        id
                        ... Todo_todo
                    }
                }
            }
        }
    }
`;

const preloadedQuery = loadQuery<TodolistQueryType>(RelayEnviroment, TodoListQuery, {});

export const TodoList = () => {

    const [, loadTodoQuery] = useQueryLoader<TodolistQueryType>(
        TodoListQuery,
        preloadedQuery
    );

    const refresh = useCallback(() => {
        loadTodoQuery({}, { fetchPolicy: 'network-only' });
    }, [loadTodoQuery]);

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('@relayTodo:token');
        if (!token) {
            history.push('/');
        }

        refresh();
    }, [history, refresh]);

    const data = usePreloadedQuery<TodolistQueryType>(TodoListQuery, preloadedQuery, { UNSTABLE_renderPolicy: 'full' });

    return (
        <Container>
            {data?.user?.todos.edges.map(({ node }) => (
                <Todo key={node.id} query={node} refresh={refresh} />
            ))}
        </Container>
    );
};