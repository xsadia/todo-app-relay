import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { HomePageUserQuery } from './__generated__/HomePageUserQuery.graphql';
import graphql from 'babel-plugin-relay/macro';
import RelayEnviroment from '../../relay/RelayEnviroment';

const UserInfoQuery = graphql`
    query HomePageUserQuery {
        user {
            username
            email
            todos {
                edges {
                    node {
                        id
                        content
                    }
                }
            }
        }
    }
`;

const preloadedQuery = loadQuery<HomePageUserQuery>(RelayEnviroment, UserInfoQuery, {});



export const HomePage = () => {

    const data = usePreloadedQuery<HomePageUserQuery>(UserInfoQuery, preloadedQuery);

    return (
        <>
            <h1>{data.user.username}</h1>
            <h1>{data.user.email}</h1>
            {data.user.todos.edges.map(node => (
                <h1 key={node.node.id}>{node.node.content}</h1>
            ))}
            {/* <TodoList data={data.user.todos} /> */}
        </>
    );
};
