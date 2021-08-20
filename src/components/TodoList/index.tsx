import graphql from 'babel-plugin-relay/macro';
import { useCallback } from 'react';
import { loadQuery, PreloadedQuery, useLazyLoadQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import RelayEnviroment from '../../relay/RelayEnviroment';
import { Todo } from '../Todo';
import { Container } from './styles';
import { TodoListQuery as TodolistQueryType } from './__generated__/TodoListQuery.graphql';
import TodoListQuery from './__generated__/TodoListQuery.graphql';

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

/* const preloadedQuery = loadQuery<TodolistQueryType>(RelayEnviroment, TodoQuery, {}); */


export const TodoList = () => {

    const [queryRef, loadQuery] = useQueryLoader<TodolistQueryType>(
        TodoListQuery,
        TodoQuery
    );

    const refresh = useCallback(() => {
        loadQuery({}, { fetchPolicy: 'network-only' });
    }, [loadQuery]);

    const data = usePreloadedQuery<TodolistQueryType>(TodoListQuery, queryRef);

    /* const data = useLazyLoadQuery<TodolistQueryType>(TodoQuery, {}, { fetchPolicy: 'store-or-network' }); */

    return (

        <Container>
            {data?.user?.todos.edges.map(({ node }) => (
                <Todo key={node.id} query={node} refresh={refresh} />
            ))}
        </Container>
    );
};