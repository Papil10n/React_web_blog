import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import WorksPage from "./Components/WorksPage/WorksPage";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path='/' element={ <MainPage />} />
                <Route path='/works' element={ <WorksPage />} />
                <Route path='/blog' element={ <BlogPage />} />
                <Route path='/contacts' element={ <ContactsPage />} />

            </Routes>
            <Footer />
        </div>
);
}

export default App;

