import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

const App = () => {
    return (
        <div>
            <Header />
            <Container>

                <Outlet />
            </Container>
        </div>
    );
}

export default App;