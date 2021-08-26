import { Input } from "../../components/Input";
import { SignUpPageContainer, SignUpPageForm, SignUpPageLabel, LinkContainer } from "./styles";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { FormButton } from "../../components/FormButton";
import { useFormik } from "formik";
import { useMutation } from "react-relay";
import * as Yup from 'yup';
import graphql from 'babel-plugin-relay/macro';
import { ErrorMessage } from "../../components/ErrorMessage";
import { Link, useHistory } from "react-router-dom";
import { SignUpPage_CreateUserMutation, SignUpPage_CreateUserMutationResponse } from "./__generated__/SignUpPage_CreateUserMutation.graphql";
import { FormEvent, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Values = {
    email: string;
    username: string;
    password: string;
};

export const SignUpPage = () => {

    const [commit] = useMutation<SignUpPage_CreateUserMutation>(
        graphql`
            mutation SignUpPage_CreateUserMutation($input: CreateUserInput!) {
                CreateUserMutation(input: $input) {
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
                    username: values.username,
                    password: values.password
                }
            },
            onCompleted: ({ CreateUserMutation }: SignUpPage_CreateUserMutationResponse) => {
                if (CreateUserMutation?.error) {
                    toast(CreateUserMutation.error, {
                        type: "error",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return;
                }

                if (CreateUserMutation?.token) {
                    localStorage.setItem('@relayTodo:token', CreateUserMutation.token);
                    localStorage.setItem('@relayTodo:user', JSON.stringify(CreateUserMutation.me));
                    history.push('/home');
                }
            },
        };
        commit(config);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('E-mail required').email('Provide a valid e-mail'),
            username: Yup.string().required('Username required'),
            password: Yup.string().required('Password required').min(6, 'Minimum of 6 characters')
        }),
        onSubmit
    });

    const handleSubmitGambiarra = (e: FormEvent) => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return (
        <SignUpPageContainer>
            <SignUpPageForm onSubmit={handleSubmitGambiarra} >
                <SignUpPageLabel>Email</SignUpPageLabel>
                <Input
                    isErrored={!!formik.errors.email}
                    type="text"
                    id="email"
                    name="email"
                    icon={FiMail}
                    placeholder="E-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) :
                    null
                }
                <SignUpPageLabel>Username</SignUpPageLabel>
                <Input
                    isErrored={!!formik.errors.username}
                    icon={AiOutlineUser}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                {formik.touched.username && formik.errors.username ? (
                    <ErrorMessage>{formik.errors.username}</ErrorMessage>
                ) :
                    null
                }
                <SignUpPageLabel>Password</SignUpPageLabel>
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

                <FormButton type="submit" onClick={() => { }}>Submit</FormButton>
                <LinkContainer>
                    <Link to="/">
                        Already have an account?
                        <span>sign in</span>
                        <FiLogIn />
                    </Link>
                </LinkContainer>
            </SignUpPageForm>
            <ToastContainer />
        </SignUpPageContainer>
    );
};