import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
/* import { useAuth } from "../../auth/useAuth"; */
import { LoginPageContainer, LoginPageForm, LoginpageLabel } from "./styles";
import * as Yup from 'yup';
import { Input } from "../../components/Input";
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { FormButton } from "../../components/FormButton";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useMutation } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import { LoginPage_authMutation, LoginPage_authMutationResponse } from './__generated__/LoginPage_authMutation.graphql';
import { FormEvent } from "react";
import { useEffect } from "react";

type Values = {
    email: string;
    password: string;
};



export const LoginPage = () => {
    const [commit] = useMutation<LoginPage_authMutation>(
        graphql`
            mutation LoginPage_authMutation($input: AuthUserInput!) {
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
        `,

    );

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('@relayTodo:token');
        if (token) {
            history.push('/home');
        }
    }, [history]);

    const onSubmit = (values: Values) => {
        const config = {
            variables: {
                input: {
                    email: values.email,
                    password: values.password
                }
            },
            onCompleted: ({ AuthUserMutation }: LoginPage_authMutationResponse) => {
                if (AuthUserMutation?.token) {
                    localStorage.setItem('@relayTodo:token', AuthUserMutation.token);
                    localStorage.setItem('@relayTodo:user', JSON.stringify(AuthUserMutation.me));
                    history.push('/home');
                }
            },
        };
        commit(config);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('E-mail required').email('Provide a valid e-mail'),
            password: Yup.string().required('Password required').min(6, 'Minimum of 6 characters')
        }),
        onSubmit
    });

    const handleSubmitGambiarra = (e: FormEvent) => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return (
        <LoginPageContainer>

            <LoginPageForm onSubmit={handleSubmitGambiarra} >
                <LoginpageLabel>E-mail</LoginpageLabel>
                <Input
                    isErrored={!!formik.errors.email}
                    type="text"
                    id="email"
                    name="email"
                    icon={BiUser}
                    placeholder="E-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) :
                    null
                }

                <LoginpageLabel>Password</LoginpageLabel>
                <Input
                    isErrored={!!formik.errors.password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    icon={BiLockAlt}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                ) :
                    null
                }
                <FormButton type="submit" >Sign in</FormButton>
            </LoginPageForm>
        </LoginPageContainer>
    );
};