import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    touched?: boolean;
}

const Input: React.FC<IProps> = ({ label, error, touched, ...inputProps }) => {
    return (
        <Wrapper>
            <input className="input" {...inputProps} placeholder={label} />
            {touched && !!error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const ErrorMessage = styled.p`
    padding-top: 4px;
    font-size: 1.3rem;
    color: #fb3e3e;
`;

export default Input;
