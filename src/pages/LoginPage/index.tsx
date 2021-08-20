import { useFormik, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoginPageContainer, LoginPageForm, LoginpageLabel } from "./styles";
import * as Yup from 'yup';
import { Input } from "../../components/Input";
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { FormButton } from "../../components/FormButton";
import { ErrorMessage } from "../../components/ErrorMessage";

export const LoginPage = () => {
    const history = useHistory();

    const { signIn } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('E-mail required').email('Provide a valid e-mail'),
            password: Yup.string().required('Password required').min(6, 'Minimum of 6 characters')
        }),
        onSubmit: ({ email, password }) => {
            signIn({ email, password });
            history.push('/');
        }
    });

    return (
        <LoginPageContainer>

            <LoginPageForm onSubmit={formik.handleSubmit}>
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
                <FormButton>Sign in</FormButton>
            </LoginPageForm>
        </LoginPageContainer>
    );
};