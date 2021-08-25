import { TodoList } from '../../components/TodoList';
import { Header } from '../../components/Header';
import { HomePageContainer } from './styles';
import Modal from 'react-modal';
import { useState } from 'react';
import { CreateTodoModal } from '../../components/CreateTodoModal';


Modal.setAppElement('#root');

export const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header handleOpenModal={handleOpenModal} />
            <HomePageContainer>
                <CreateTodoModal
                    handleCloseModal={handleCloseModal}
                    isModalOpen={isModalOpen}
                />
                <TodoList />
            </HomePageContainer>
        </>
    );
};
