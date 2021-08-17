import { useLazyLoadQuery } from "react-relay";
import UserQuery from '../../relay/UserQuery';
import { UserQuery as UserQueryType } from '../../__generated__/UserQuery.graphql';


export const HomePage = () => {

    const { user } = useLazyLoadQuery<UserQueryType>(UserQuery, {});

    console.log(user);

    return (
        <h1>{user.username}</h1>
    );
};