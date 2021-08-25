import graphql from 'babel-plugin-relay/macro';
import { useCallback } from 'react';
import { loadQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import RelayEnviroment from '../../relay/RelayEnviroment';
import { Todo } from '../Todo';
import { Container } from './styles';
import { TodoListQuery as TodolistQueryType } from './__generated__/TodoListQuery.graphql';
import TodoListQuery from './__generated__/TodoListQuery.graphql';
import { useEffect } from 'react';
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
    const [
        ,
        loadQuery,
        disposeQuery
    ] = useQueryLoader<TodolistQueryType>(
        TodoListQuery,
        preloadedQuery
    );

    const refresh = useCallback(() => {
        loadQuery({}, { fetchPolicy: 'network-only' });
    }, [loadQuery]);

    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('@relayTodo:token');
        if (!token) {
            disposeQuery();
            history.push('/');
        }

        refresh();
    }, [history, refresh, disposeQuery]);

    const data = usePreloadedQuery<TodolistQueryType>(TodoListQuery, preloadedQuery, { UNSTABLE_renderPolicy: 'full' });

    /*  const data = useLazyLoadQuery<TodolistQueryType>(TodoQuery, {}, { fetchPolicy: 'store-or-network' }); */
    return (
        <Container>
            {data?.user?.todos.edges.map(({ node }) => (
                <Todo key={node.id} query={node} refresh={refresh} />
            ))}
        </Container>
    );
};