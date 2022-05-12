import graphql from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";
import {
  CompleteTodoButton,
  Container,
  DeleteTodoButton,
  TodoContainer,
  TodoContent,
  TodoContentContainer,
  TodoDate,
} from "./styles";
import { Todo_todo$key } from "./__generated__/Todo_todo.graphql";
import { Todo_DeleteTodoMutation } from "./__generated__/Todo_DeleteTodoMutation.graphql";
import { Todo_CompleteMutation } from "./__generated__/Todo_CompleteMutation.graphql";
import { IoClose } from "react-icons/io5";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

type TodoListProps = {
  query: Todo_todo$key;
  connectionID: any;
};

export const Todo = ({ query, connectionID }: TodoListProps) => {
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

  const [commitComplete] = useMutation<Todo_CompleteMutation>(
    graphql`
      mutation Todo_CompleteMutation($input: CompleteTodoInput!) {
        CompleteTodoMutation(input: $input) {
          todoEdge {
            node {
              isCompleted
            }
          }
          success
          error
        }
      }
    `
  );

  const [commitDelete] = useMutation<Todo_DeleteTodoMutation>(
    graphql`
      mutation Todo_DeleteTodoMutation(
        $input: DeleteTodoInput!
        $connections: [ID!]!
      ) {
        DeleteTodoMutation(input: $input) {
          deletedTodo @deleteEdge(connections: $connections)
          success
          error
        }
      }
    `
  );

  const handleCompleteTodo = () => {
    commitComplete({
      variables: {
        input: {
          id: data.id,
        },
      },
      onCompleted: () => {},
    });
  };

  const handleDeleteTodo = () => {
    commitDelete({
      variables: {
        connections: [connectionID],
        input: {
          id: data.id,
        },
      },
      onCompleted: () => {
        console.log("");
      },
    });
  };

  return (
    <Container>
      <TodoContainer>
        <CompleteTodoButton type="button" onClick={() => handleCompleteTodo()}>
          {data.isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </CompleteTodoButton>
        <TodoContentContainer isCompleted={data.isCompleted}>
          <TodoContent>{data.content}</TodoContent>
          <TodoDate>
            {new Date(Number(data.createdAt)).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </TodoDate>
        </TodoContentContainer>
      </TodoContainer>
      <DeleteTodoButton type="button" onClick={() => handleDeleteTodo()}>
        <IoClose />
      </DeleteTodoButton>
    </Container>
  );
};
