import { graphql } from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { usePaginationFragment } from "react-relay";
import { Todo } from "../Todo";
import { Container } from "./styles";
import { TodoList_query$key } from "./__generated__/TodoList_query.graphql";
import { useHistory } from "react-router-dom";
import { CreateTodoModal } from "../CreateTodoModal";

type TodoListProps = {
  query: TodoList_query$key;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TodoList = ({
  query,
  isModalOpen,
  setIsModalOpen,
}: TodoListProps) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment(
    graphql`
      fragment TodoList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 4 }
        after: { type: String }
      )
      @refetchable(queryName: "TodoListPaginationQuery") {
        todos(first: $first, after: $after) @connection(key: "TodoList_todos") {
          __id
          edges {
            cursor
            node {
              id
              ...Todo_todo
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query
  );
  const history = useHistory();
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("@relayTodo:token");
    if (!token) {
      history.push("/");
    }
  }, [history]);

  return (
    <Container>
      <CreateTodoModal
        connectionID={data.todos.__id}
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
      {data?.todos.edges.map(({ node }) => (
        <Todo connectionID={data.todos.__id} key={node.id} query={node} />
      ))}
    </Container>
  );
};
