import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';
import Home from './components/home';
import Layout from './components/layout';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
       
    );
}

export default App;