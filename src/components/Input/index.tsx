import { ChangeEvent, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, CustomInput, IconContainer } from './styles';

type InputProps = {
    icon: ComponentType<IconBaseProps>;
    value: string;
    onChange: (e: ChangeEvent<any>) => void;
    placeholder: string;
    id: string;
    name: string;
    type: string;
    isErrored: boolean;
};

export const Input = ({ icon: Icon, value, onChange, placeholder, type, id, name, isErrored }: InputProps) => {
    return (
        <Container isErrored={isErrored} >
            <IconContainer isErrored={isErrored}>
                <Icon />
            </IconContainer>
            <CustomInput
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                id={id}
                name={name}
            />
        </Container>
    );
};