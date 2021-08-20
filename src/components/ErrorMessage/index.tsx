import { ReactNode } from "react";
import { ErrorMsg } from "./styles";

type ErrorMessageProps = {
    children: ReactNode;
};
export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <ErrorMsg>{children}</ErrorMsg>
    );
};