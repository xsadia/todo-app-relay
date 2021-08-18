import { TodoContentFragment$key } from "../../relay/__generated__/TodoContentFragment.graphql";
import { UserQueryResponse } from "../../relay/__generated__/UserQuery.graphql";

type TodoListProps = {
    data: TodoContentFragment$key;
};

export const TodoList = ({ data }: TodoListProps) => {
    console.log(data);

    return (
        <>
            <h1>AAA</h1>
            {/* {data.user.todos.edges.map(node => (
                
            ))} */}
        </>
    );
};