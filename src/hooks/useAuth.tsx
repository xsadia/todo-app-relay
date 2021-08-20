import { createContext, useContext, useState, ReactNode } from 'react';
import { useMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useAuth_authMutation } from './__generated__/useAuth_authMutation.graphql';
import { useHistory } from 'react-router-dom';

type User = {
    id: string;
    username: string;
    email: string;
};

type SignInCredentials = {
    email: string;
    password: string;
};

type AuthState = {
    token: string;
    user: User;
};

type AuthContexData = {
    user: User;
    token: string;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [commit] = useMutation<useAuth_authMutation>(
        graphql`
            mutation useAuth_authMutation($input: AuthUserInput!) {
                AuthUserMutation(input: $input) {
                    me {
                        id
                        username
                        email
                    }
                    token
                    error
                }
            }
        `
    );

    const [data, setData] = useState(() => {

        const token = localStorage.getItem('@relayTodo:token');
        const user = localStorage.getItem('@relayTodo:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    async function signIn({ email, password }: SignInCredentials) {
        commit({
            variables: {
                input: {
                    email,
                    password
                }
            },
            onCompleted({ AuthUserMutation }) {
                const { me, token } = AuthUserMutation;
                localStorage.setItem('@relayTodo:token', token);
                localStorage.setItem('@relayTodo:user', JSON.stringify(me));
                setData({ token, user: me });
            }
        });
    }

    function signOut() {
        localStorage.removeItem('@relayTodo:token');
        localStorage.removeItem('@relayTodo:user');

        setData({} as AuthState);
    }

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, token: data.token }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContexData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Use this within an AuthProvider');
    }

    return context;
}