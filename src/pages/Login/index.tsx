import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect } from "react";

import Button from "../../components/Form/Button";
import FormGroup from "../../components/Form/FormGroup";
import Input from "../../components/Form/Input";
import path from "../../routes/path";
import { loginSchema } from "../../validation";
import authApi from "../../api/auth";
import storage from "../../helpers/storage";
import { STORAGE_KEYS } from "../../constants";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("continue_url") || path.home;

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                const res = await authApi.login(values);

                storage.set(STORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken);
                storage.set(STORAGE_KEYS.REFRESH_TOKEN, res.data.refreshToken);
                navigate(redirectPath, { replace: true });
            } catch (err) {
                toast.error("Have an error");
            }
        },
        validationSchema: loginSchema,
    });

    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEYS.ACCESS_TOKEN);
        if (accessToken) {
            navigate(redirectPath, { replace: true });
        }
    }, [navigate, redirectPath]);

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>
                <FormGroup>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        value={values.email}
                        touched={touched.email}
                        error={errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        value={values.password}
                        touched={touched.password}
                        error={errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" disabled={isSubmitting}>
                        Login
                    </Button>
                </FormGroup>
                <p className="navigate-message">
                    Don’t have an Account? <Link to={path.register}>Create account</Link>
                </p>
            </Form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .navigate-message {
        font-size: 1.6rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 1.8rem;
        margin-bottom: 32px;
    }
`;

export default Login;
