import styled from "styled-components";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
`;

export default Button;
