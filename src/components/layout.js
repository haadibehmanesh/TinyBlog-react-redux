import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./header";


const Layout = () => {
    return (  
        <div>
        <Header />
        <Container className="mt-5 mb-5">
            <Outlet />
        </Container>
    </div>
    );
}
 
export default Layout;