import Modal from "react-modal";
import graphql from "babel-plugin-relay/macro";
import {
  CloseModalButton,
  ModalForm,
  ModalFormInput,
  ModalFormLabel,
  SubmitModalButton,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { useMutation } from "react-relay";
import { CreateTodoModal_CreateTodoMutation } from "./__generated__/CreateTodoModal_CreateTodoMutation.graphql";
import { FormEvent } from "react";
import { useState } from "react";

type CreateTodoModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  connectionID: any;
};

export const CreateTodoModal = ({
  handleCloseModal,
  isModalOpen,
  connectionID,
}: CreateTodoModalProps) => {
  const [inputValue, setInputValue] = useState("");

  const [commit] = useMutation<CreateTodoModal_CreateTodoMutation>(
    graphql`
      mutation CreateTodoModal_CreateTodoMutation(
        $input: CreateTodoInput!
        $connections: [ID!]!
      ) {
        CreateTodoMutation(input: $input) {
          todoEdge @prependEdge(connections: $connections) {
            cursor
            node {
              id
              content
              isCompleted
              createdAt
            }
          }
          created
          error
        }
      }
    `
  );

  const handleSumit = (event: FormEvent) => {
    event.preventDefault();
    commit({
      variables: {
        connections: [connectionID],
        input: {
          content: inputValue,
        },
      },
      onCompleted() {
        handleCloseModal();
        setInputValue("");
      },
    });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalForm onSubmit={handleSumit}>
        <CloseModalButton type="button" onClick={() => handleCloseModal()}>
          <IoClose />
        </CloseModalButton>
        <div>
          <ModalFormLabel>Create Todo</ModalFormLabel>
          <ModalFormInput
            placeholder="Todo content"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <SubmitModalButton type="submit">Submit</SubmitModalButton>
      </ModalForm>
    </Modal>
  );
};
