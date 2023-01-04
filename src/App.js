import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import WorksPage from "./Components/WorksPage/WorksPage";
import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="page">
                <div className="contentContainer max-w-[856px] m-auto">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/home" element={<MainPage/>}/>
                        <Route path='/works' element={<WorksPage/>}/>
                        <Route path='/blog' element={<BlogPage/>}/>
                        <Route path='/contacts' element={<ContactsPage/>}/>
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

