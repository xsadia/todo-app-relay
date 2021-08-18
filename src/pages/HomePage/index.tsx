import { useLazyLoadQuery } from "react-relay";
import UserQuery from '../../relay/UserQuery';
import { UserQuery as UserQueryType } from '../../relay/__generated__/UserQuery.graphql';
import { TodoList } from "../../components/TodoList";

export const HomePage = () => {

    const data = useLazyLoadQuery<UserQueryType>(UserQuery, {});

    return (
        <>
            <h1>{data.user.username}</h1>
            <TodoList data={data.user.todos} />
        </>
    );
};
