import { ReactNode } from "react";
import { Button } from "./styles";

type InputProps = {
    children: ReactNode;
};

export const FormButton = ({ children }: InputProps) => {
    return (
        <Button type="submit" >
            {children}
        </Button>
    );
};