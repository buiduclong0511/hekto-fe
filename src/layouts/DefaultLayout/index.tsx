import styled from "styled-components";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface IProps extends React.PropsWithChildren {}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.div`
    flex: 1;
`;

export default DefaultLayout;
