import { useAuth } from "../hooks/useAuth";
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { ComponentType } from "react";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: ComponentType;
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
    const { user } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect to={{
                        pathname: isPrivate ? '/login' : '/',
                        state: { from: location }
                    }} />
                );
            }}
        />
    );
}