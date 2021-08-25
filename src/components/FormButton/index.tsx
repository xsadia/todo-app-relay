import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const FormButton = ({ children, ...rest }: ButtonProps) => {
    return (
        <Button {...rest}  >
            {children}
        </Button>
    );
};