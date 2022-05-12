import { TodoList } from "../../components/TodoList";
import { Header } from "../../components/Header";
import { HomePageContainer } from "./styles";
import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { CreateTodoModal } from "../../components/CreateTodoModal";
import { useLazyLoadQuery } from "react-relay";
import { HomePageQuery_todosQuery } from "./__generated__/HomePageQuery_todosQuery.graphql";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const query = useLazyLoadQuery<HomePageQuery_todosQuery>(
    graphql`
      query HomePageQuery_todosQuery {
        ...TodoList_query
      }
    `,
    {},
    { fetchPolicy: "store-or-network" }
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <HomePageContainer>
        <TodoList
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          query={query}
        />
      </HomePageContainer>
    </>
  );
};
