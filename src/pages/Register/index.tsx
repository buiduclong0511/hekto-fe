import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import FormGroup from "../../components/Form/FormGroup";
import path from "../../routes/path";
import { registerSchema } from "../../validation";

function Register() {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: registerSchema,
    });

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <h1 className="title">Register</h1>
                <FormGroup>
                    <Input
                        label="First name"
                        id="first-name"
                        name="firstName"
                        value={values.firstName}
                        error={errors.firstName}
                        touched={touched.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Last name"
                        id="last-name"
                        name="lastName"
                        value={values.lastName}
                        error={errors.lastName}
                        touched={touched.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Confirm password"
                        id="confirm-password"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Register</Button>
                </FormGroup>
                <p className="navigate-message">
                    Don’t have an Account? <Link to={path.login}>Create account</Link>
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

export default Register;
