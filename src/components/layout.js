import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./header";


const Layout = () => {
    return (  
        <div>
        <Header />
        <Container>
            <Outlet />
        </Container>
    </div>
    );
}
 
export default Layout;